import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'
import { useStoreContext } from 'StoreContext'
import DarkThemeButton from 'components/DarkThemeButton'

const Home = () => {
	const { appStore } = useStoreContext()

	return (
		<Box sx={{ padding: 2 }}>
			<Typography variant='h2'>Home</Typography>
			<Button>Button</Button>
			<DarkThemeButton />
		</Box>
	)
}

export default observer(Home)
