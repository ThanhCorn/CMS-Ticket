import DatePick from '../components/DatePick';
import Chart from '../components/Chart';
import PieChart from '../components/PieChart';

const Dashboard = () => {
  return (
    <div className="flex flex-1 justify-start h-screen">
      <div className="bg-white h-[98%] w-[98%]">
        <div className="mx-5 my-10">
          <h1 className="text-4xl font-black text-[#1E0D03] mb-10">Thống kê</h1>
          <div className="flex flex-col w-[95%]">
            <div className="flex justify-between mb-2">
              <p className="text-lg font-bold">Doanh thu</p>
              <DatePick disabled={false} />
            </div>
            <div className="flex flex-col">
              <Chart />
              <span className="font-light opacity-95 mt-5">
                Tổng doanh thu theo tuần
              </span>
              <h2 className="flex font-bold text-2xl items-baseline">
                525.145.000 <p className="ml-1 font-normal text-lg">đồng</p>
              </h2>
            </div>
            <div className="grid grid-flow-row grid-cols-4 w-full">
              <DatePick disabled={true} />
              <PieChart label="Gói gia đình" pointX={56024} pointY={13568} />
              <PieChart label="Gói sự kiện" pointX={30256} pointY={28302} />
              <div className="flex flex-col h-full w-full place-content-start ml-20 mt-20">
                <div className="flex w-full ">
                  <p className="w-[44px] h-[20px] bg-[#4F75FF] rounded mr-3"></p>
                  <span>Vé đã sử dụng</span>
                </div>
                <div className="flex w-full ">
                  <p className="w-[44px] h-[20px] bg-[#FF8A48] rounded mr-3"></p>
                  <span>Vé chưa sử dụng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
