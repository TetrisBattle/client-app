import { Box, Button, Typography } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

export const Home = observer(() => {
	const { appStore } = useStore()

	return (
		<Box id='Home' sx={{ p: 3 }}>
			<Typography variant='h1'>Home</Typography>
			<Button onClick={() => appStore.toggleDarkMode()}>Theme</Button>
		</Box>
	)
})
