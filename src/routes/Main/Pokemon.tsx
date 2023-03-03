import { IPokemon } from '../../types'
import s from './pokemon.module.scss'
type Props = {
	pokemon: IPokemon
	setPokemon: any
	children?: React.ReactNode
}

export default function Pokemon({ pokemon, setPokemon }: Props) {
	return <div className={s.wrapper} onClick={() => setPokemon(pokemon)}>
		<img src={pokemon.sprites.back_default} alt="" />
		<p className={s.name}>{pokemon.name}</p>
		<div className={s.bot_container}>
			<span className={s.exp}>EXP: {pokemon.base_experience}</span>
			<span className={s.exp}>weight: {pokemon.weight}</span>
		</div>
		<div className={s.types_container}>
			{ pokemon.types.map(type => <span className={s.type}>{ type.type.name }</span> ) }
		</div>
	</div>
}