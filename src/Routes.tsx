import { Navigate, createBrowserRouter } from 'react-router-dom'
import { App } from 'App'
import { NotFound } from 'features/NotFound'
import { Home } from 'features/Home'
import { About } from 'features/About'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	About = '/about',
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: RouteOption.NotFound, element: <NotFound /> },
			{
				path: '*',
				element: <Navigate replace to={RouteOption.NotFound} />,
			},
			{ path: '/', element: <Navigate replace to={RouteOption.Home} /> },
			{ path: RouteOption.Home, element: <Home /> },
			{ path: RouteOption.About, element: <About /> },
		],
	},
])

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
