import { Root } from 'App/Root'
import { About } from 'features/About'
import { Home } from 'features/Home'
import { NotFound } from 'features/NotFound'
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	About = '/about',
}

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Root />,
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
]

export const router = createBrowserRouter(routes)

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
