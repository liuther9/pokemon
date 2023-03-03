import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { IPokemon } from '../types';

const initialState: IPokemon[] = []

export const pokemonSlice = createSlice({
  name: 'pokemonslice',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<IPokemon[]>) => {
      return action.payload
    }
  }
})

export const { setPokemons } = pokemonSlice.actions

export const selectCount = (state: RootState) => state.pokemonSlice
export default pokemonSlice.reducer