import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TypesOfTicket } from '../@types/myTypes';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const initialState = {
  isLoading: false,
  typesTicket: [] as TypesOfTicket[],
};

export const fetchTypesTicket = createAsyncThunk(
  'typesTicket/fetchTypesTicket',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'ticketType'));
      const ticketsData = querySnapshot.docs.map((doc) => doc.data());
      const typesTicket = ticketsData.map(
        (data): TypesOfTicket => ({
          STT: data.STT,
          DateOut: data.DateOut.toDate().toISOString().substring(0, 10),
          DateToUse: data.DateToUse.toDate().toISOString().substring(0, 10),
          BookingCode: data.BookingCode,
          State: data.State,
          TicketName: data.TicketName,
          Price: data.Price,
          ComboPrice: data.ComboPrice,
        }),
      );
      const sortedSTT = typesTicket.sort((a, b) => {
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

export const typesTicketSlice = createSlice({
  name: 'typesTicket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypesTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTypesTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.typesTicket = action.payload;
      })
      .addCase(fetchTypesTicket.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default typesTicketSlice.reducer;
