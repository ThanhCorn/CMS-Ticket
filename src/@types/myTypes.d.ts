import PieChart from '../components/PieChart';

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
