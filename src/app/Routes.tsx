import { App } from 'app/App'
import { About } from 'features/About'
import { Home } from 'features/Home'
import { NotFound } from 'features/NotFound'
import { Forms } from 'playground/form/components/FormsDashboard'
import { FormikForm } from 'playground/form/forms/formik/FormikForm'
import { ReactHookForm } from 'playground/form/forms/reactHookForm/ReactHookForm'
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	About = '/about',
	Forms = '/forms',
	FormikForm = '/formikForm',
	ReactHookForm = '/reactHookForm',
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
			{ path: RouteOption.Forms, element: <Forms /> },
			{ path: RouteOption.FormikForm, element: <FormikForm /> },
			{ path: RouteOption.ReactHookForm, element: <ReactHookForm /> },
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
