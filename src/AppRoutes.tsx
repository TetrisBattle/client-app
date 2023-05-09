import { RouteOption } from 'enums/RouteOption'
import { Routes, Route, Navigate } from 'react-router-dom'
import { About } from 'routes/About'
import { Home } from 'routes/Home'

export function AppRoutes() {
	return (
		<Routes>
			<Route path='*' element={<Navigate replace to='/' />} />
			<Route
				path='/'
				element={<Navigate replace to={RouteOption.Home} />}
			/>
			<Route path={RouteOption.Home} element={<Home />} />
			<Route path={RouteOption.About} element={<About />} />
		</Routes>
	)
}
