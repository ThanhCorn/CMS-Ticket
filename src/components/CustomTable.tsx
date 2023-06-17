import { Table } from 'antd';
import { styled } from 'styled-components';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTickets } from '../features/ticketsSlice';

import {
  CustomColumnsType,
  TableParams,
  TicKetType,
  TypesOfTicket,
} from '../@types/myTypes';
import { useState } from 'react';

type DataTicket = TicKetType[] | TypesOfTicket[];

const CustomTable = ({
  columns,
  data,
}: {
  columns: CustomColumnsType;
  data: DataTicket;
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { tickets, isLoading } = useSelector(
    (state: RootState) => state.tickets,
  );
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  console.log(tickets, isLoading);

  return (
    <div className="w-full h-full mt-5">
      <TableContent
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
      ></TableContent>
    </div>
  );
};

export default CustomTable;

const TableContent = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #f1f4f8;
    font-weight: 600;
    text-align: center;
  }
  td {
    text-align: center;
  }
  .ant-table-cell {
    text-align: center;
    max-width: 323px;
    width: 323px;
  }
`;
