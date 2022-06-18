import { observer } from 'mobx-react-lite'
import { Button } from '@mui/material'
import { useStoreContext } from 'StoreContext'
import DarkThemeButton from 'components/DarkThemeButton'

const Home = () => {
	const { appStore } = useStoreContext()

	return (
		<div className='Home'>
			<h1>Home</h1>
			<DarkThemeButton />
		</div>
	)
}

export default observer(Home)
