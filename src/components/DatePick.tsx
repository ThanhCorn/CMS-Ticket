import { DatePicker, Radio, RadioChangeEvent } from 'antd';
import { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/vi'; // Import the Vietnamese locale for dayjs
import locale from 'antd/es/date-picker/locale/vi_VN';
import styled from 'styled-components';
import { DateContext } from '../context/DateContext';

const DatePick = ({ disabled }: { disabled: boolean }) => {
  const { mode, setMode } = useContext(DateContext);

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };
  useEffect(() => {
    dayjs.locale('vi');
  }, [mode]);

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
      className="h-[40px] w-[150px]"
      renderExtraFooter={renderExtraHeader} // Use renderExtraFooter instead of renderExtraHeader
      picker={getPickerType()} // Set the picker type directly
      locale={locale} // Set the Vietnamese locale
      defaultValue={dayjs()} // Set the default value
      disabled={disabled}
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
