import { useState } from 'react';
import DatePick from '../components/DatePick';
import { DataChart } from '../DataChart';
import { DataChartType } from '../@types/myTypes';
import Chart from '../components/Chart';

const Dashboard = () => {
  const [dataChart, setDataChart] = useState<DataChartType[]>([DataChart]);
  console.log(dataChart);
  return (
    <div className="flex flex-1 justify-start h-screen w-full">
      <div className="bg-white h-[95%] w-[98%]">
        <div className="mx-5 my-5">
          <h1 className="text-4xl font-black text-[#1E0D03] mb-10">Thống kê</h1>
          <div className="flex flex-col w-[95%]">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Doanh thu</p>
              <DatePick />
            </div>
            <div>
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
