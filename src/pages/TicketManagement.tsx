import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../components/SearchBar';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ModalFilter from '../components/ModalFilter';
import CustomTable from '../components/CustomTable';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchTickets } from '../features/ticketsSlice';
import { Dropdown, type MenuProps } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: <span>Sử dụng vé</span>,
    key: '1',
  },
  {
    label: <span>Đổi ngày sử dụng</span>,
    key: '2',
  },
];

type Status = {
  Used: boolean;
  NotUsedYet: boolean;
  OutOfUsed: boolean;
};

const TicketManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { tickets, isLoading } = useSelector(
    (state: RootState) => state.tickets,
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  console.log(tickets, isLoading);

  const renderStatus = (status: Status) => {
    if (status.Used) {
      return (
        <p className="w-[80%]  mx-auto text-left  pl-4 py-1  border-gray-500 border-2  bg-[#EAF1F8] text-gray-500 rounded ">
          ⚈ Đã sử dụng
        </p>
      );
    } else if (status.NotUsedYet) {
      return (
        <p className="w-[80%]  mx-auto text-left  pl-4 py-1  border-green-600 border-2  bg-[#DEF7E0] text-green-600  rounded">
          ⚈ Chưa sử dụng
        </p>
      );
    } else if (status.OutOfUsed) {
      return (
        <p className="w-[80%]  mx-auto text-left pl-4 py-1  border-red-500 border-2  bg-[#EAF1F8] text-red-500 rounded">
          ⚈ Hết hạn
        </p>
      );
    }
    return '';
  };

  const renderGate = (value: string) => {
    const gateStatus = tickets.some(
      (ticket) => ticket?.Status?.NotUsedYet === true,
    );

    const gateOutOfUsed = tickets.some(
      (ticket) =>
        ticket.CheckinDoor == 'Cổng 1' && ticket?.Status?.OutOfUsed === true,
    );
    if (value === '') {
      if (gateStatus) {
        return (
          <div className="flex items-baseline w-[100%]">
            <p className="text-xl w-[50%] text-right">-</p>
            <Dropdown
              menu={{ items }}
              className="text-xl w-[50%] text-right"
              placement="topRight"
            >
              <MoreOutlined />
            </Dropdown>
          </div>
        );
      } else if (gateOutOfUsed) {
        return <p>-</p>;
      }
    }
    return value;
  };
  return (
    <div className="flex flex-1 justify-start h-screen w-full">
      <div className="bg-white h-[98%] w-[98%] ">
        <div className="mx-5 my-10">
          <h1 className="text-4xl font-bold text-[#1E0D03] mb-10">
            Danh sách vé
          </h1>
          <div className="flex items-center w-full justify-between">
            <SearchBar placeholder="Tìm bằng số vé" />
            <div className="">
              <button
                onClick={() => setModalOpen(true)}
                className="p-4 px-10 border-solid border-2 border-orange-400 rounded-xl text-orange-400 font-bold text-xl "
              >
                <FontAwesomeIcon icon={faFilter} className="mr-3 text-2xl" />
                Lọc vé
              </button>
              {modalOpen && (
                <ModalFilter
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                />
              )}
              <button className="p-4 px-10 border-solid border-2 border-orange-400 rounded-xl ml-3 text-orange-400 font-bold text-xl">
                Xuất file (.csv)
              </button>
            </div>
          </div>
          <CustomTable
            data={tickets}
            columns={[
              {
                title: 'STT',
                dataIndex: 'STT',
                key: 'STT',
              },
              {
                title: 'Booking Code',
                dataIndex: 'BookingCode',
                key: 'BookingCode',
              },
              {
                title: 'Số vé',
                dataIndex: 'TicketNumber',
                key: 'TicketNumber',
              },
              {
                title: 'Tình trạng sử dụng',
                dataIndex: 'Status',
                key: 'Status',
                render: renderStatus,
              },
              {
                title: 'Ngày sử dụng',
                dataIndex: 'DateUsed',
                key: 'DateUsed',
              },
              {
                title: 'Ngày xuất vé',
                dataIndex: 'DatePrintf',
                key: 'DatePrintf',
              },
              {
                title: 'Cổng check-in',
                dataIndex: 'CheckinDoor',
                key: 'CheckinDoor',
                render: renderGate,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;
