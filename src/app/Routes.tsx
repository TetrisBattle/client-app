import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { About } from 'features/About'
import { Home } from 'features/Home'
import { NotFound } from 'features/NotFound'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	About = '/about',
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

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest
	describe('#routeToTitle', () => {
		it('should capitalize first letter of route', () => {
			expect(routeToTitle(RouteOption.Home)).toBe('Home')
			expect(routeToTitle(RouteOption.About)).toBe('About')
		})
	})
}
