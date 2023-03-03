import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import s from './root.module.scss'

export default function Root() {
	return (
		<div className={s.wrapper}>
			<Sidebar />
			<main className={s.container}>
				<Outlet />
			</main>
		</div>
	)
}
