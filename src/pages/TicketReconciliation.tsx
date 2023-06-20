import SearchBar from '../components/SearchBar';
import CustomTable from '../components/CustomTable';
import { useEffect, useState } from 'react';
import { Button, Radio, RadioChangeEvent } from 'antd';
import DatePick from '../components/DatePick';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  fetchTickets,
  fetchTicketsByReconciliation,
} from '../features/ticketsSlice';

const TicketReconciliation = () => {
  const [valueRadio, setValueRadio] = useState('all');
  const dispatch: AppDispatch = useDispatch();
  const { tickets, filterTickets, isLoading } = useSelector(
    (state: RootState) => state.tickets,
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);
  const rednerReconciliation = (value: boolean) => {
    if (value) {
      return <p className="text-red-400 italic font-bold">Đã đối soát</p>;
    }
    return <p className="font-bold opacity-50 italic">Chưa đối soát</p>;
  };

  const onChange = (e: RadioChangeEvent) => {
    dispatch(fetchTicketsByReconciliation(e.target.value));
    setValueRadio(e.target.value);
  };

  return (
    <div className="flex flex-1 justify-start h-screen">
      <div className=" h-[98%] w-[98%] grid grid-cols-3">
        <div className="bg-white col-span-2 w-[98%] rounded">
          <div className="mx-5 my-10 ">
            <h1 className="text-4xl font-black text-[#1E0D03] mb-10">
              Đối soát vé
            </h1>

            <div className="flex items-center w-full justify-between">
              <SearchBar placeholder="Tìm bằng số vé" />
              <div className="">
                <button className="p-4 px-10 border-solid border-2 border-orange-400 bg-orange-400 rounded-xl text-white font-bold text-xl ">
                  Chốt đối soát
                </button>
              </div>
            </div>
            <CustomTable
              data={filterTickets.length ? filterTickets : tickets}
              columns={[
                {
                  title: 'STT',
                  dataIndex: 'STT',
                  key: 'STT',
                },

                {
                  title: 'Số vé',
                  dataIndex: 'TicketNumber',
                  key: 'TicketNumber',
                },

                {
                  title: 'Ngày sử dụng',
                  dataIndex: 'DateUsed',
                  key: 'DateUsed',
                },
                {
                  title: 'Tên loại vé',
                  dataIndex: 'TicketName',
                  key: 'TicketName',
                },
                {
                  title: 'Cổng check-in',
                  dataIndex: 'CheckinDoor',
                  key: 'CheckinDoor',
                },
                {
                  title: '',
                  dataIndex: 'Reconciliation',
                  key: 'Reconciliation',
                  render: rednerReconciliation,
                },
              ]}
            />
          </div>
        </div>
        <div className="bg-white rounded">
          <div className="mx-5 my-10">
            <h1 className="text-3xl font-black text-[#1E0D03] mb-10">Lọc vé</h1>
            <div className="flex">
              <p className="w-[50%] text-lg font-bold opacity-80">
                Tình trạng đối soát
              </p>
              <div className="flex flex-col ">
                <Radio.Group
                  onChange={onChange}
                  value={valueRadio}
                  className="flex flex-col"
                  buttonStyle="outline"
                >
                  <Radio value="all" className="text-lg mb-1">
                    Tất cả
                  </Radio>
                  <Radio value="true" className="text-lg my-1">
                    Đã đối soát
                  </Radio>
                  <Radio value="false" className="text-lg my-1">
                    Chưa đối soát
                  </Radio>
                </Radio.Group>
              </div>
            </div>
            <div className="flex my-2">
              <p className="font-bold opacity-80 w-[50%]">Loại vé</p>
              <span>Vé cổng</span>
            </div>
            <div className="flex my-3 items-center">
              <p className="font-bold opacity-80 w-[50%]">Từ ngày</p>
              <DatePick disabled={true} />
            </div>
            <div className="flex items-center">
              <p className="font-bold opacity-80 w-[50%]">Đến ngày</p>
              <DatePick disabled={false} />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Button className="w-[30%] justify-center py-5 flex items-center text-xl font-bold text-orange-400 border-orange-400">
                Lọc
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketReconciliation;
