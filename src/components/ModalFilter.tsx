import { Modal, Radio } from 'antd';
import { ModalFilterProps } from '../@types/myTypes';
import DatePick from './DatePick';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useState } from 'react';

const ModalFilter = ({ modalOpen, setModalOpen }: ModalFilterProps) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Modal
      title="Lọc vé"
      centered
      visible={modalOpen}
      okText="Lọc"
      okType="primary"
      okButtonProps={{ className: 'bg-orange-400' }}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
    >
      <div className="flex w-full justify-start">
        <div className="mr-10">
          <p>Từ ngày</p>
          <DatePick disabled={false} />
        </div>
        <div>
          <p>Đến ngày</p>
          <DatePick disabled={false} />
        </div>
      </div>
      <div>
        <p>Tình trạng sử dụng</p>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Tất cả</Radio>
          <Radio value={2}>Đã sử dụng</Radio>
          <Radio value={3}>Chưa sử dụng</Radio>
          <Radio value={4}>Hết hạn</Radio>
        </Radio.Group>
      </div>
    </Modal>
  );
};

export default ModalFilter;
