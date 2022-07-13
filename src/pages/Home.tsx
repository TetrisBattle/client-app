import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'
import { useStoreContext } from 'StoreContext'
import DarkThemeButton from 'components/DarkThemeButton'
import { useState } from 'react'

function Home() {
	const { appStore } = useStoreContext()

	return (
		<Box sx={{ padding: 2 }}>
			<Typography variant='h2'>Home</Typography>
			<DarkThemeButton />
			<Button onClick={() => appStore.isLoading = true}>Button</Button>
		</Box>
	)
}

export default observer(Home)
