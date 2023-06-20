import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TicKetType } from '../@types/myTypes';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const initialState = {
  isLoading: false,
  tickets: [] as TicKetType[],
  filterTickets: [] as TicKetType[],
};

const fetchTicketsData = async () => {
  const querySnapshot = await getDocs(collection(db, 'tickes'));
  const ticketsData = querySnapshot.docs.map((doc) => doc.data());
  const tickets = ticketsData.map(
    (data): TicKetType => ({
      STT: data.STT,
      DatePrintf: data.DatePrintf.toDate().toISOString().substring(0, 10),
      DateUsed: data.DateUsed.toDate().toISOString().substring(0, 10),
      TicketNumber: data.TicketNumber,
      BookingCode: data.BookingCode,
      CheckinDoor: data.CheckinDoor,
      Reconciliation: data.Reconciliation,
      Status: data.Status,
      TicketName: data.TicketName,
    }),
  );
  return tickets;
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, thunkAPI) => {
    try {
      const tickets = await fetchTicketsData();
      console.log(tickets);
      const sortedSTT = tickets.sort((a, b) => {
        if (a.STT && b.STT) {
          if (a.STT > b.STT) return 1;
        }
        if (a.STT && b.STT) {
          if (a.STT < b.STT) return -1;
        }

        return 0;
      });
      return sortedSTT;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

export const fetchTicketsByStatus = createAsyncThunk(
  'tickets/fetchTicketsByStatus',
  async (status: number, thunkAPI) => {
    console.log(status);
    try {
      const tickets = await fetchTicketsData();
      const sortedSTT = tickets.sort((a, b) => {
        if (a.STT && b.STT) {
          if (a.STT > b.STT) return 1;
        }
        if (a.STT && b.STT) {
          if (a.STT < b.STT) return -1;
        }

        return 0;
      });
      const filterTickets = sortedSTT.filter((ticket) => {
        if (status === 1) return ticket;
        if (status === 2) return ticket?.Status?.Used;
        if (status === 3) return ticket?.Status?.NotUsedYet;
        if (status === 4) return ticket?.Status?.OutOfUsed;
        return ticket;
      });
      const updatedTickets = filterTickets.map((ticket, index) => ({
        ...ticket,
        STT: index + 1,
      }));
      return updatedTickets;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);
export const fetchTicketsByReconciliation = createAsyncThunk(
  'tickets/fetchTicketsByReconciliation',
  async (status: string, thunkAPI) => {
    console.log(status);
    try {
      const tickets = await fetchTicketsData();
      const sortedSTT = tickets.sort((a, b) => {
        if (a.STT && b.STT) {
          if (a.STT > b.STT) return 1;
        }
        if (a.STT && b.STT) {
          if (a.STT < b.STT) return -1;
        }

        return 0;
      });
      const filterTickets = sortedSTT.filter((ticket) => {
        if (status === 'all') return ticket;
        if (status === 'true') return ticket.Reconciliation;
        if (status === 'false') return !ticket.Reconciliation;
        return ticket;
      });
      const updatedTickets = filterTickets.map((ticket, index) => ({
        ...ticket,
        STT: index + 1,
      }));
      return updatedTickets;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchTicketsByStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTicketsByStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterTickets = action.payload;
      })
      .addCase(fetchTicketsByStatus.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchTicketsByReconciliation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTicketsByReconciliation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filterTickets = action.payload;
      })
      .addCase(fetchTicketsByReconciliation.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default ticketsSlice.reducer;
