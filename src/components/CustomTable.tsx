import { Table } from 'antd';
import { styled } from 'styled-components';

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
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  return (
    <div className="w-full h-full mt-5">
      <TableContent
        key={data.length}
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
    font-size: 14px;
  }
  td {
    text-align: center;
  }
  .ant-table-cell {
    text-align: center;
    max-width: 323px;
    width: 323px;
  }
  .ant-table-thead .ant-table-cell:last-child {
    background-color: #f1f4f8;
  }
`;
