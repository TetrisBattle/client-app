import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from 'components/header/Header'
import { AppRoutes } from 'AppRoutes'
import { observer } from 'mobx-react-lite'

export const App = observer(() => {
	return (
		<Router>
			<Header />
			<AppRoutes />
		</Router>
	)
})
