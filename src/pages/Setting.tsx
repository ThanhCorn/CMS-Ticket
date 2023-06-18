import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchTypesTicket } from '../features/typesTicketSlice';
import { FormOutlined } from '@ant-design/icons';
import ModalAddTicketPackage from '../components/ModalAddTicketPackage';

const Setting = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { typesTicket, isLoading } = useSelector(
    (state: RootState) => state.typesTicket,
  );

  useEffect(() => {
    dispatch(fetchTypesTicket());
  }, [dispatch]);
  console.log(typesTicket, isLoading);

  const renderState = (state: boolean) => {
    if (state)
      return (
        <p className="bg-[#DEF7E0] text-[#03AC00] border-green-600 border-2 rounded">
          ⚈ Đang áp dụng
        </p>
      );
    return (
      <p className="bg-[#F8EBE8] text-[#FD5959] border-red-600 border-2 rounded w-[50%]">
        ⚈ Tắt
      </p>
    );
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
              <button className="p-4 px-10 border-solid border-2 border-orange-400 rounded-xl  text-orange-400 font-bold text-xl">
                Xuất file (.csv)
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="p-4 ml-3 px-10 border-solid border-2  rounded-xl bg-orange-400 text-white font-bold text-xl "
              >
                Thêm gói vé
              </button>
              {modalOpen && (
                <ModalAddTicketPackage
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  modalEditOpen={modalEditOpen}
                  setModalEditOpen={setModalEditOpen}
                />
              )}
            </div>
          </div>
          <CustomTable
            data={typesTicket}
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
                title: 'Tên gói vé',
                dataIndex: 'TicketName',
                key: 'TicketName',
              },
              {
                title: 'Ngày áp dụng',
                dataIndex: 'DateToUse',
                key: 'DateToUse',
              },
              {
                title: 'Ngày hết hạn',
                dataIndex: 'DateOut',
                key: 'DateOut',
              },
              {
                title: 'Giá vé (VNĐ/Vé)',
                dataIndex: 'Price',
                key: 'Price',
              },
              {
                title: 'Giá Combo (VNĐ/Combo)',
                dataIndex: 'ComboPrice',
                key: 'ComboPrice',
              },
              {
                title: 'Tình trạng',
                dataIndex: 'State',
                key: 'State',
                render: renderState,
              },
              {
                title: '',
                dataIndex: '',
                key: '',
                render: () => {
                  return (
                    <button
                      className="flex items-center text-lg text-orange-400 justify-center"
                      onClick={() => setModalEditOpen(true)}
                    >
                      <FormOutlined className="mr-2 text-lg" />
                      Cập nhật{' '}
                    </button>
                  );
                },
              },
            ]}
          />
          {modalEditOpen && (
            <ModalAddTicketPackage
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              modalEditOpen={modalEditOpen}
              setModalEditOpen={setModalEditOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Setting;
