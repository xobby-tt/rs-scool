import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cardsSliceReducer from './cards-slice';

export const AppStore = configureStore({
  reducer: {
    cards: cardsSliceReducer,
  },
});

export type AppDispatch = typeof AppStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
