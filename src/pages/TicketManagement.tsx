import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../components/SearchBar';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'antd';
import { styled } from 'styled-components';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTickets } from '../features/ticketsSlice';

type Status = {
  Used: boolean;
  NotUsedYet: boolean;
  OutOfUsed: boolean;
};

const TicketManagement = () => {
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
      return 'Đã sử dụng';
    } else if (status.NotUsedYet) {
      return 'Chưa sử dụng';
    } else if (status.OutOfUsed) {
      return 'Hết hạn';
    }
    return '';
  };

  return (
    <div className="flex flex-1 justify-start h-screen w-full">
      <div className="bg-white h-[95%] w-[98%] ">
        <div className="mx-5 my-10">
          <h1 className="text-4xl font-bold text-[#1E0D03] mb-10">
            Danh sách vé
          </h1>
          <div className="flex items-center w-full justify-between">
            <SearchBar placeholder="Tìm bằng số vé" />
            <div className="">
              <button className="p-4 px-10 border-solid border-2 border-orange-400 rounded-xl text-orange-400 font-bold text-xl ">
                <FontAwesomeIcon icon={faFilter} className="mr-3 text-2xl" />
                Lọc vé
              </button>
              <button className="p-4 px-10 border-solid border-2 border-orange-400 rounded-xl ml-3 text-orange-400 font-bold text-xl">
                Xuất file (.csv)
              </button>
            </div>
          </div>
          <div className="w-full h-full mt-5">
            <CustomTable
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
                },
              ]}
              dataSource={tickets}
            ></CustomTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;

const CustomTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #f1f4f8;
    font-weight: 600;
    text-align: center;
  }
  td {
    text-align: center;
  }
`;
