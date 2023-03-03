import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { IPokemon } from '../types';

const initialState = false

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload
    }
  }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer