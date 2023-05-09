import { Outlet } from 'react-router-dom'
import { Header } from 'components/header/Header'

export const App = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
