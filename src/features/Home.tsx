import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'
import { useStoreContext } from 'contexts/useStoreContext'

export const Home = observer(() => {
	const { appStore } = useStoreContext()

	return (
		<Box id='Home' sx={{ p: { xs: 2, sm: 3 } }}>
			<Typography variant='h1'>Home</Typography>
			<Button onClick={() => appStore.toggleDarkTheme()}>Theme</Button>
		</Box>
	)
})
