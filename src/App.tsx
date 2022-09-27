import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Header from 'components/Header'

export default function App() {
	const { appStore } = useStoreContext()

	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Navigate replace to={appStore.pages[0].path} />}
				/>
				{appStore.pages.map((page) => (
					<Route key={page.path} path={page.path} element={page.element} />
				))}
			</Routes>

			<Backdrop open={appStore.isLoading}>
				<CircularProgress />
			</Backdrop>
		</Router>
	)
}
