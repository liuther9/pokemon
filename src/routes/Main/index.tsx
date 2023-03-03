import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Pokemon from './Pokemon'
import PokemonModal from '../../components/PokemonModal'
import { useGetAllPokemonsQuery, useGetPokemonTypesQuery } from '../../store/pokemonApi'
import { useAppSelector } from '../../store'
import { IPokemon } from '../../types'
import s from './main.module.scss'

export default function Main() {
	useGetAllPokemonsQuery('')
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(0)
	const [perPage, setPerPage] = useState(10)
	const pokeTypes = useGetPokemonTypesQuery('')
	const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>()
	const [show, setShow] = useState(false)
	const [pokemons, setPokemons] = useState<IPokemon[]>([])
	const [allPokes, setAllPokes] = useState<IPokemon[]>([])
	const [type, setType] = useState('')

	const setPokemon = (e: IPokemon) => {
		setSelectedPokemon(e)
		setShow(true)
	}

	const pokes = useAppSelector(state => state.pokemonSlice)
	const loading = useAppSelector(state => state.loadingSlice)

	useEffect(() => {
		const arr = type.length !== 0 ? pokes.filter(pokemon => pokemon.types.find(i => i.type.name === type)) : pokes
		setAllPokes(arr)
	}, [pokes, type])

	useEffect(() => {
		const arr = type.length !== 0
			? allPokes
				.filter(pokemon => pokemon.types.find(i => i.type.name === type))
				.slice((page - 1) * perPage, page * perPage)
			: allPokes.slice((page - 1) * perPage, page * perPage)
		setPokemons(arr)
	}, [page, perPage, allPokes, type])

	useEffect(() => { setPageCount(Math.ceil(allPokes.length)/perPage) }, [allPokes, perPage])

	return (
		<section className={s.wrapper}>
			{!pokeTypes.isLoading && (
				<div className={s.poketypes}>
					<button className={s.poketype + ' ' + s.reset} onClick={() => setType('')}>All types</button>
					{pokeTypes.data.results.map((i: any) => (
						<button key={i.name} className={s.poketype} onClick={() => setType(i.name)}>{i.name}</button>
					))}
				</div>
			)}
			<div className={s.settings}>
				<div className={s.select_wrapper}>
					<label htmlFor='Per Page'>Per Page</label>
					<select
						name='Per Page'
						className={s.select_container}
						value={perPage}
						onChange={(e) => setPerPage(parseInt(e.target.value))}
					>
						<option value={10} className={s.select_option}>
							10
						</option>
						<option value={20} className={s.select_option}>
							20
						</option>
						<option value={50} className={s.select_option}>
							50
						</option>
					</select>
				</div>
				<ReactPaginate
					className={s.pagination}
					breakLabel='...'
					nextLabel='>'
					onPageChange={(e) => setPage(e.selected + 1)}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel='<'
					activeClassName={s.active_page}
					containerClassName={s.pagination_container}
				/>
			</div>
			{
				<div className={s.container}>
					{!loading ? pokemons.map((pokemon) => (
						<Pokemon key={pokemon.name} pokemon={pokemon} setPokemon={setPokemon} />
					)) : <h1 className={s.loading}>Загрузка</h1> }
				</div>
			}
			{show && <PokemonModal pokemon={selectedPokemon} setShow={setShow} />}
		</section>
	)
}
