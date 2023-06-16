import SearchBar from '../components/SearchBar';
import CustomTable from '../components/CustomTable';

const TicketReconciliation = () => {
  const rednerReconciliation = (value: boolean) => {
    if (value) {
      return <p>Đã đối soát</p>;
    }
    return <p>Chưa đối soát</p>;
  };

  return (
    <div className="flex flex-1 justify-start h-screen">
      <div className=" h-[98%] w-[98%] grid grid-cols-3">
        <div className="bg-white col-span-2 w-[98%] rounded">
          <div className="mx-5 my-10 ">
            <h1 className="text-4xl font-black text-[#1E0D03] mb-10">
              Đối soát vé
            </h1>

            <div className="flex items-center w-full justify-between">
              <SearchBar placeholder="Tìm bằng số vé" />
              <div className="">
                <button className="p-4 px-10 border-solid border-2 border-orange-400 bg-orange-400 rounded-xl text-white font-bold text-xl ">
                  Chốt đối soát
                </button>
              </div>
            </div>
            <CustomTable
              columns={[
                {
                  title: 'STT',
                  dataIndex: 'STT',
                  key: 'STT',
                },

                {
                  title: 'Số vé',
                  dataIndex: 'TicketNumber',
                  key: 'TicketNumber',
                },

                {
                  title: 'Ngày sử dụng',
                  dataIndex: 'DateUsed',
                  key: 'DateUsed',
                },
                {
                  title: 'Tên loại vé',
                  dataIndex: 'TicketName',
                  key: 'TicketName',
                },
                {
                  title: 'Cổng check-in',
                  dataIndex: 'CheckinDoor',
                  key: 'CheckinDoor',
                },
                {
                  title: '',
                  dataIndex: 'Reconciliation',
                  key: 'Reconciliation',
                  render: rednerReconciliation,
                },
              ]}
            />
          </div>
        </div>
        <div className="bg-white rounded">
          <div className="mx-5 my-10">
            <h1 className="text-3xl font-black text-[#1E0D03] mb-10">Lọc vé</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketReconciliation;
