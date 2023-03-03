import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { pokemonApi } from './pokemonApi'
import pokemonSlice from './pokemonSlice'
import listenerMiddleware from './listener'
import searchSlice from './searchSlice'
import loadingSlice from './loadingSlice'

export const store = configureStore({
  reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		pokemonSlice: pokemonSlice,
		search: searchSlice,
		loadingSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware).prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector