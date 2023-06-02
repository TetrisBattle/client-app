import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'
import { useStore } from 'contexts/useStore'

export const Home = observer(() => {
	const { appStore } = useStore()

	return (
		<Box id='Home' sx={{ p: 3 }}>
			<Typography variant='h1'>Home</Typography>
			<Button onClick={() => appStore.toggleDarkTheme()}>Theme</Button>
		</Box>
	)
})
