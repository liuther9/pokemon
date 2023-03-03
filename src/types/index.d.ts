type IPokemon = {
	name: string,
	url: string,
	types: {
		slot: number
		type: {
			name: string
			url: string
		}
	}[]
	abilities: {
		ability: {
			name: string
			url: string
		}
		is_hidden: boolean
		slot: number
	}[]
	base_experience: number
	forms: any
	game_indices: any
	height: number
	held_items: any
	id: number
	is_default: boolean
	location_area_encounters: string
	moves: any
	name: string
	order: number
	past_types: []
	species: {
		name: string
		url: string
	}
	sprites: any
	stats: any
	weight: number
}

interface IPokemonsResult {
	count: number,
	next: string,
	previous: string,
	results: Pokemon[]
}

export { IPokemon, IPokemonsResult }