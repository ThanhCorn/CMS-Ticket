import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../features/ticketsSlice';
import typesTicketReducer from '../features/typesTicketSlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    typesTicket: typesTicketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
