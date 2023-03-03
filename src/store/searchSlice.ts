import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { IPokemon } from '../types';

const initialState = ''

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      return action.payload
    }
  }
})

export const { setInput } = searchSlice.actions

export const selectCount = (state: RootState) => state.search
export default searchSlice.reducer