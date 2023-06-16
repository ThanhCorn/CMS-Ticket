import { Button, Modal, Radio } from 'antd';
import { ModalFilterProps } from '../@types/myTypes';
import DatePick from './DatePick';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { styled } from 'styled-components';

const plainOptions = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5'];
const defaultCheckedList = ['Cổng 1'];

const ModalFilter = ({ modalOpen, setModalOpen }: ModalFilterProps) => {
  const [value, setValue] = useState(1);
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangeCheckbox = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <CustomModal
      title="Lọc Vé"
      centered
      visible={modalOpen}
      okType="primary"
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={null}
    >
      <div className="flex w-full justify-start mb-3">
        <div className="mr-10">
          <p className="font-normal">Từ ngày</p>
          <DatePick disabled={false} />
        </div>
        <div>
          <p className="font-normal">Đến ngày</p>
          <DatePick disabled={false} />
        </div>
      </div>
      <div className="mb-5">
        <p className="font-bold">Tình trạng sử dụng</p>
        <Radio.Group
          onChange={onChange}
          value={value}
          className="flex justify-between"
        >
          <Radio value={1}>Tất cả</Radio>
          <Radio value={2}>Đã sử dụng</Radio>
          <Radio value={3}>Chưa sử dụng</Radio>
          <Radio value={4}>Hết hạn</Radio>
        </Radio.Group>
      </div>
      <div className="mb-10">
        <p className="font-bold">Cổng Check - in</p>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Tất cả
        </Checkbox>
        <Checkbox.Group
          options={plainOptions}
          value={checkedList}
          onChange={onChangeCheckbox}
          className="flex justify-between"
        />
      </div>
      <div className="flex justify-center items-center">
        <Button className="px-12 py-5 flex items-center font-bold text-orange-400 border-orange-400">
          Lọc
        </Button>
      </div>
    </CustomModal>
  );
};

export default ModalFilter;

const CustomModal = styled(Modal)`
  .ant-modal-title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
  }
`;
