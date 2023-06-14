import PieChart from '../components/PieChart';
import firebase from 'firebase/compat/app';
import { Timestamp } from 'firebase/firestore';

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
  STT: number;
  DatePrintf: firebase.firestore.Timestamp;
  DateUsed: firebase.firestore.Timestamp;
  TicketNumber: string;
  BookingCode: string;
  CheckinDoor?: string;
  Status: {
    Used: boolean;
    NotUsedYet: boolean;
    OutOfUsed: boolean;
  };
}

firestore
  .collection('tickets')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const ticketData = doc.data();
      // Access the fields of each ticket document
      const STT = ticketData.STT;
      const DatePrintf = ticketData.DatePrintf;
      const DateUsed = ticketData.DateUsed;
      const TicketNumber = ticketData.TicketNumber;
      const BookingCode = ticketData.BookingCode;
      const CheckinDoor = ticketData.CheckinDoor;
      const Status = ticketData.Status;

      // Process the ticket data as needed
      console.log('Ticket Number:', TicketNumber);
      console.log('Status:', Status);

      // ... Handle other fields or perform further operations
    });
  })
  .catch((error) => {
    console.error('Error getting documents: ', error);
  });
