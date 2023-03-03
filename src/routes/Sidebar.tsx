import { Link } from 'react-router-dom'
import s from './sidebar.module.scss'
import { useAppDispatch, useAppSelector } from '../store'
import { setInput } from '../store/searchSlice'

export default function Sidebar() {
	const value = useAppSelector(state => state.search)
	const dispatch = useAppDispatch()

	return <nav className={s.wrapper}>
		<label typeof='text' htmlFor='search' className={s.label}>Искать</label>
		<input name='search' value={value} onChange={e => dispatch(setInput(e.target.value))} className={s.input} placeholder='Введите имя покемона на латинице' />
		<div className={s.link_container}>
			<Link className={s.link} to='/'>Главная</Link>
			<Link className={s.link} to='/main'>к покемонам</Link>
		</div>
	</nav>
}