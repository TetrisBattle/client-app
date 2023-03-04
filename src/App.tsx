import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Header from 'components/header/Header'
import About from 'routes/About'
import Home from 'routes/Home'

function AppRoutes() {
	return (
		<Routes>
			<Route path='*' element={<Navigate replace to='/' />} />
			<Route path='/' element={<Navigate replace to='/home' />} />
			<Route path='/home' element={<Home />} />
			<Route path='/about' element={<About />} />
		</Routes>
	)
}

export default function App() {
	const { appStore } = useStoreContext()

	return (
		<Router>
			<Header />
			<AppRoutes />

			<Backdrop open={appStore.isLoading}>
				<CircularProgress />
			</Backdrop>
		</Router>
	)
}
