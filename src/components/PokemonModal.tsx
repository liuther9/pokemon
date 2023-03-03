import { IPokemon } from '../types'
import s from './pokemonmodal.module.scss'

export default function PokemonModal({ pokemon, setShow }: { pokemon: IPokemon | undefined, setShow: any }) {
	return <div className={s.wrapper} onClick={() => setShow(false)}>
		<div className={s.container} onClick={e => e.stopPropagation()}>
			<img className={s.img} src={pokemon?.sprites.back_default} alt="" />
			<h3 className={s.big_text}>species: <span className={s.text}>{pokemon?.species.name}</span></h3>
			<h3 className={s.big_text}>Abilities: {pokemon?.abilities.map((i) => <span className={s.text} key={i.slot}>{i.ability.name}</span>)}</h3>
		</div>
	</div>
}