import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { About } from 'features/About'
import { Home } from 'features/Home'
import { NotFound } from 'features/NotFound'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	About = '/about',
	Phones = '/phones',
}

export function routeToTitle(route: RouteOption): string {
	return route[1].toUpperCase() + route.slice(2)
}

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{ path: RouteOption.NotFound, element: <NotFound /> },
			{
				path: '*',
				element: <Navigate replace to={RouteOption.NotFound} />,
			},
			{ path: RouteOption.Home, element: <Home /> },
			{ path: RouteOption.About, element: <About /> },
		],
	},
]

export const router = createBrowserRouter(routes)
