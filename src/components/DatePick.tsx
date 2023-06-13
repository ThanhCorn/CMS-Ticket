import { DatePicker, Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // Import the Vietnamese locale for dayjs
import locale from 'antd/es/date-picker/locale/vi_VN';
import styled from 'styled-components';

const DatePick = () => {
  const [mode, setMode] = useState('day');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const renderExtraHeader = () => {
    return (
      <div className="w-full flex items-center justify-around h-[40px]">
        <Radio.Group value={mode} onChange={handleModeChange}>
          <Radio value="day" className="text-[16px] font-normal">
            Theo ngày
          </Radio>
          <Radio value="week" className="text-[16px] font-normal">
            Theo tuần
          </Radio>
        </Radio.Group>
      </div>
    );
  };

  const getPickerType = () => {
    if (mode === 'week') {
      return 'week';
    }
    return 'date';
  };

  return (
    <CustomDatePick
      className="h-[40px]"
      renderExtraFooter={renderExtraHeader} // Use renderExtraFooter instead of renderExtraHeader
      picker={getPickerType()} // Set the picker type directly
      locale={locale} // Set the Vietnamese locale
      defaultValue={dayjs()} // Set the default value
    />
  );
};

export default DatePick;

const CustomDatePick = styled(DatePicker)`
  svg {
    font-size: 20px;
    color: #ff993c;
  }
`;
