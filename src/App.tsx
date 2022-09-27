import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Header from 'components/Header'
import Home from 'pages/Home'
import About from 'pages/About'

export default function App() {
	const { appStore } = useStoreContext()

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate replace to='/Home' />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/About' element={<About />} />
			</Routes>

			<Backdrop open={appStore.isLoading}>
				<CircularProgress />
			</Backdrop>
		</Router>
	)
}
