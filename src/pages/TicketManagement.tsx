import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ModalFilter from '../components/ModalFilter';
import CustomTable from '../components/CustomTable';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchTickets, filterSearchValue } from '../features/ticketsSlice';
import { ChangeEvent } from 'react';
import {
  Dropdown,
  Spin,
  type MenuProps,
  Menu,
  Modal,
  Button,
  Input,
} from 'antd';
import { MoreOutlined, LoadingOutlined } from '@ant-design/icons';
import { TicKetType } from '../@types/myTypes';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import DatePick from '../components/DatePick';
const { Search } = Input;
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
  const [modal2Open, setModal2Open] = useState(false);
  const [ticketChange, setTicketChange] = useState<TicKetType>();
  const [searchValue, setSearchValue] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const { tickets, filterTickets, isLoading, filteredTickets } = useSelector(
    (state: RootState) => state.tickets,
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);
  console.log('tickets', filteredTickets);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  if (isLoading) {
    return <Spin indicator={antIcon} />;
  }

  const renderStatus = (status: Status) => {
    if (status.Used) {
      return (
        <p className="w-[100%]  mx-auto text-left  pl-4 py-1  border-gray-500 border-2  bg-[#EAF1F8] text-gray-500 rounded ">
          ⚈ Đã sử dụng
        </p>
      );
    } else if (status.NotUsedYet) {
      return (
        <p className="w-[100%]  mx-auto text-left  pl-4 py-1  border-green-600 border-2  bg-[#DEF7E0] text-green-600  rounded">
          ⚈ Chưa sử dụng
        </p>
      );
    } else if (status.OutOfUsed) {
      return (
        <p className="w-[100%]  mx-auto text-left pl-4 py-1  border-red-500 border-2  bg-[#EAF1F8] text-red-500 rounded">
          ⚈ Hết hạn
        </p>
      );
    }
    return '';
  };
  const renderButton = (record: TicKetType) => {
    const handleMenuClick = (items: MenuItemType) => {
      if (items.key === '1') {
        return '';
      } else if (items.key === '2') {
        setModal2Open(true);
        setTicketChange(record);
      }
    };
    return (
      <>
        <Dropdown
          overlay={<Menu items={items} onClick={handleMenuClick}></Menu>}
          trigger={['click']}
          placement="topRight"
        >
          <MoreOutlined className="text-2xl" />
        </Dropdown>
        {modal2Open && (
          <Modal
            title="Đổi ngày sử dụng vé"
            centered
            okType="primary"
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            footer={null}
          >
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <p className="mb-2">Số vé</p>
                <p className="mb-2">Số vé</p>
                <p className="mb-2">Tên sự kiện</p>
                <p className="mb-2">Hạn sử dụng</p>
              </div>
              <div className="col-span-2">
                <p className="mb-2">{ticketChange?.BookingCode}</p>
                <p className="mb-2">{ticketChange?.CheckinDoor}</p>
                <p className="mb-2">Hội trợ triển lãm hàng tiêu dùng 2021</p>
                <DatePick disabled={true} />
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <Button className="px-12 py-5 flex items-center font-bold text-orange-400 border-orange-400">
                Lọc
              </Button>
            </div>
          </Modal>
        )}
      </>
    );
  };

  const onSearch = (value: string) => {
    dispatch(filterSearchValue(value));
  };

  return (
    <div className="flex flex-1 justify-start h-screen w-full">
      <div className="bg-white h-[98%] w-[98%] ">
        <div className="mx-5 my-10">
          <h1 className="text-4xl font-bold text-[#1E0D03] mb-10">
            Danh sách vé
          </h1>
          <div className="flex items-center w-full justify-between">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 200 }}
              allowClear
            />
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
            data={
              filterTickets.length || filteredTickets.length
                ? filterTickets.length
                  ? filterTickets
                  : filteredTickets
                : tickets
            }
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
              {
                title: '',
                dataIndex: 'tickets',
                key: 'button',
                render: (_, record: any) => renderButton(record as TicKetType),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;
