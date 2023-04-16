import { Pokemon } from '@favware/graphql-pokemon';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { AppState } from '.';
import { GET_ALL_POKEMONS, PokemonApiClient, SEARCH } from '../api';

type CardsSlice = {
  items: Pokemon[];
  searchQuery: string;
  searchCards: Pokemon[];
  loading: boolean;
  error: string;
};

const initialState: CardsSlice = {
  searchQuery: undefined,
  searchCards: undefined,
  items: undefined,
  loading: undefined,
  error: undefined,
};

export const seachCards = createAsyncThunk('cards/searchCards', async (query: string) => {
  if (!query) {
    return null;
  }

  const response = await PokemonApiClient.query<{ getFuzzyPokemon: WritableDraft<Pokemon>[] }>({
    query: SEARCH,
    variables: { pokemon: query },
  });
  return response && response.data;
});

export const fetchCards = createAsyncThunk('cards/items', async () => {
  const response = await PokemonApiClient.query<{ getAllPokemon: WritableDraft<Pokemon>[] }>({
    query: GET_ALL_POKEMONS,
    variables: { take: 20, offset: 100 },
  });
  return response && response.data;
});

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.items = action.payload.getAllPokemon;
        state.loading = false;
      })
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action?.error.message;
        state.loading = false;
      })
      .addCase(seachCards.fulfilled, (state, action) => {
        state.searchCards = action.payload?.getFuzzyPokemon;
        state.loading = false;
      })
      .addCase(seachCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(seachCards.rejected, (state, action) => {
        state.error = action?.error.message;
        state.loading = false;
      });
  },
});

export const { setSearchQuery } = cardsSlice.actions;

export const selectCards = (state: AppState) => {
  return state.cards.searchCards || state.cards.items;
};
export const selectStatus = (state: AppState) => ({
  loading: state.cards.loading,
  error: state.cards.error,
});
export const selectSearchQuery = (state: AppState) => state.cards.searchQuery;
