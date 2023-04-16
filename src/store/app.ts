import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cardsSlice } from './cards-slice';
import { newCardsSlice } from './new-cards-slice';

export const AppStore = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    newCards: newCardsSlice.reducer,
  },
});

export type AppDispatch = typeof AppStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
