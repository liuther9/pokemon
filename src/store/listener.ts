import { pokemonApi } from './pokemonApi';
import { createListenerMiddleware } from '@reduxjs/toolkit'
import { setPokemons } from './pokemonSlice';
import { IPokemon } from '../types';
import { setInput } from './searchSlice';
import { RootState } from '.';

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: pokemonApi.endpoints.getAllPokemons.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()
		if (action.type === 'pokemonApi/executeQuery/fulfilled') {
			const state: any = listenerApi.getState()
			const data = state['pokemonApi']['queries']['getAllPokemons("")']['data']
			const arr: IPokemon[] = []
			await Promise.all(data.results.map(async (i: any) => {
				try {
					const data = await fetch(i.url).then(res => res.json())
					arr.push(data)
				} catch (error) {
					console.log(error)
				}
			}))
			setTimeout(() => listenerApi.dispatch(setPokemons(arr)), 1000)
    }
  },
})

//ACTIONS ON CLOSE MODAL
listenerMiddleware.startListening({
  actionCreator: setInput,
  effect: async (action, listenerApi) => {
		listenerApi.cancelActiveListeners()
		const state = listenerApi.getState() as RootState
		const filteredPokemons = state.pokemonSlice.filter(poke => poke.name.includes(action.payload))
		listenerApi.dispatch(setPokemons(filteredPokemons))
  },
})

export default listenerMiddleware