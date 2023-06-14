import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../components/SearchBar';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'antd';
import { styled } from 'styled-components';

const TicketManagement = () => {
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
                },
                {
                  title: 'Booking Code',
                },
                {
                  title: 'Số vé',
                },
                {
                  title: 'Tình trạng sử dụng',
                },
                {
                  title: 'Ngày sử dụng',
                },
                {
                  title: 'Ngày xuất vé',
                },
                {
                  title: 'Cổng check-in',
                },
              ]}
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
`;
