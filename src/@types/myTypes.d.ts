import { ColumnType, ColumnGroupType } from 'antd/lib/table';
import PieChart from '../components/PieChart';
import firebase from 'firebase/compat/app';
import { Timestamp } from 'firebase/firestore';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

export interface DataChartType {
  forDay: Array<{ day: string }>;
  forWeek: Array<{ week: string }>;
  income: Array<string>;
}

export interface DateContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export interface PieChartType {
  label: string;
  pointY?: number;
  pointX?: number;
}

export interface TicKetType {
  STT?: number;
  DatePrintf?: firebase.firestore.Timestamp;
  DateUsed?: firebase.firestore.Timestamp;
  TicketNumber?: string;
  BookingCode?: string;
  CheckinDoor?: string;
  Reconciliation?: boolean;
  TicketName: string;
  Status?: {
    Used: boolean;
    NotUsedYet: boolean;
    OutOfUsed: boolean;
  };
}

export interface TypesOfTicket {
  STT: number;
  TicketName: string;
  BookingCode: string;
  Price: string;
  ComboPrice: string;
  DateOut: firebase.firestore.Timestamp;
  DateToUse: firebase.firestore.Timestamp;
  State: boolean;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

export interface ModalFilterProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  modalEditOpen: boolean;
  setModalEditOpen: (value: boolean) => void;
}

type CustomColumnType = ColumnType<object>;
type CustomColumnGroupType = ColumnGroupType<object>;

export type CustomColumnsType = (CustomColumnType | CustomColumnGroupType)[];
