import { Pokemon } from '@favware/graphql-pokemon';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';

type NewCardsSlice = {
  items: Partial<Pokemon>[];
};

const initialState: NewCardsSlice = {
  items: [],
};

export const newCardsSlice = createSlice({
  name: 'newCards',
  initialState,
  reducers: {
    addNewCard: (state, { payload }) => {
      state.items.push(payload);
    },
  },
});

export const { addNewCard } = newCardsSlice.actions;

export const selectNewCards = (state: AppState) => {
  return state.newCards.items;
};
