import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TicKetType } from '../@types/myTypes';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const initialState = {
  isLoading: false,
  tickets: [] as TicKetType[],
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, thunkAPI) => {
    try {
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
          Status: data.Status,
        }),
      );
      return tickets;
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
      });
  },
});

export default ticketsSlice.reducer;
