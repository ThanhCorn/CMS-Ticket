import { Button, Checkbox, Input, Modal, Select, TimePicker } from 'antd';
import { styled } from 'styled-components';
import { ModalFilterProps } from '../@types/myTypes';
import DatePick from './DatePick';
import dayjs from 'dayjs';

const ModalAddTicketPackage = ({
  modalOpen,
  setModalOpen,
  modalEditOpen,
  setModalEditOpen,
}: ModalFilterProps) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <CustomModal
      title={modalOpen ? 'Thêm gói vé' : 'Cập nhập thông tin gói vé'}
      centered
      visible={modalOpen || modalEditOpen}
      okType="primary"
      onOk={() => {
        setModalOpen(false);
        setModalEditOpen(false);
      }}
      onCancel={() => {
        setModalOpen(false);
        setModalEditOpen(false);
      }}
      footer={null}
      width={700}
    >
      <div className="flex w-full justify-start mb-3 flex-col">
        {modalOpen && (
          <>
            <p className="font-normal">
              Tên gói vé <span className="text-red-600">* </span>{' '}
            </p>
            <Input className="w-[60%]" placeholder="Nhập tên gói vé" />
          </>
        )}
        {modalEditOpen && (
          <div className="flex justify-between">
            <div className="w-[50%]">
              <p className="font-normal">
                Mã sự kiện <span className="text-red-600">* </span>{' '}
              </p>
              <Input className="w-[70%]" value="PKG20210502" />
            </div>
            <div className="w-[50%]">
              <p className="font-normal">
                Tên sự kiện <span className="text-red-600">* </span>{' '}
              </p>
              <Input
                className="w-[100%]"
                value="Hội chợ triển lãm hàng tiêu dùng 2021"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between mt-5">
          <div className="flex flex-col">
            <p>Ngày áp dụng</p>
            <div className="flex">
              <DatePick disabled={true} />
              <TimePicker
                placeholder="HH:mm:ss"
                className="ml-3"
                disabled={true}
                value={modalEditOpen ? dayjs('2021-05-02 08:00:00') : undefined}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p>Ngày hết hạn</p>
            <div className="flex">
              <DatePick disabled={true} />
              <TimePicker
                placeholder="HH:mm:ss"
                className="ml-3"
                disabled={true}
                value={modalEditOpen ? dayjs('2021-05-02 08:00:00') : undefined}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <p>Giá vé áp dụng</p>
          <div className="flex w-full items-center">
            <Checkbox className="mr-2" />
            <p className="w-full flex items-center">
              Vé lẻ (vnd/vé) với giá{' '}
              <span className="w-[100px] h-[36px] flex items-center ml-2 bg-gray-200 rounded mr-2 opacity-50">
                Giá vé
              </span>
              / vé
            </p>
          </div>
          <div className="flex">
            <Checkbox className="mr-2" />
            <p className="w-full flex items-center">
              Combo vé với giá{' '}
              <span className="w-[100px] h-[36px] flex items-center ml-2 bg-gray-200 rounded mr-2 opacity-50">
                Giá vé
              </span>
              /{' '}
              <span className="w-[50px] h-[36px] flex items-center ml-2 bg-gray-200 rounded mr-2 opacity-50">
                Giá vé
              </span>
              vé
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p>Tình trạng</p>
          <Select
            defaultValue="Đang áp dụng"
            style={{ width: '150px' }}
            onChange={handleChange}
            options={[
              {
                value: 'Đang áp dụng',
                label: 'Đang áp dụng',
              },
              {
                value: 'Tắt',
                label: 'Tắt',
              },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button className="px-12 py-5 flex items-center font-bold text-orange-400 border-orange-400 mr-4">
          Hủy
        </Button>
        <Button className="px-12 py-5 flex items-center font-bold  bg-orange-400 text-white border-orange-400">
          Lọc
        </Button>
      </div>
    </CustomModal>
  );
};

export default ModalAddTicketPackage;

const CustomModal = styled(Modal)`
  .ant-modal-title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
  }
  svg {
    color: #ff993c;
  }
`;
