import { Header } from 'components/Header-temp'
import { Outlet } from 'react-router-dom'

export const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
