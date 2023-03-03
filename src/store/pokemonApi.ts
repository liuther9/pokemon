import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	endpoints: (builder) => ({
		getAllPokemons: builder.query({
			query: () => 'pokemon?limit=600',
		}),
		getPokemonByName: builder.query<any, string>({
			query: (name) => `pokemon/${name}`,
		}),
		getPokemonByType: builder.query<any, string>({
			query: (name) => `type/${name}`,
		}),
		getPokemonTypes: builder.query({
			query: () => 'type'
		}),
	}),
})

export const {
	useGetPokemonByNameQuery,
	useGetAllPokemonsQuery,
	useLazyGetPokemonByTypeQuery,
	useGetPokemonTypesQuery,
} = pokemonApi
