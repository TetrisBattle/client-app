import { Brightness4Outlined as Brightness4OutlinedIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useStoreContext } from 'StoreContext'

function DarkThemeButton() {
	const { appStore } = useStoreContext()

	return (
		<IconButton onClick={appStore.toggleDarkTheme}>
			<Brightness4OutlinedIcon />
		</IconButton>
	)
}

export default DarkThemeButton
