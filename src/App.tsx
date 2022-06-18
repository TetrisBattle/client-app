import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import RootWrapper from 'components/RootWrapper'
import Home from 'pages/Home'

export default function App() {
	return (
		<Router>
			<RootWrapper>
				<Routes>
					<Route path='/' element={<Navigate replace to='/Home' />} />
					<Route path='/Home' element={<Home />} />
				</Routes>
			</RootWrapper>
		</Router>
	)
}
