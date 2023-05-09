import { Brightness4Outlined as Brightness4OutlinedIcon } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@mui/material'
import { useStoreContext } from 'contexts/useStoreContext'

export const DarkThemeIconButton = (iconButtonProps: IconButtonProps) => {
	const { appStore } = useStoreContext()

	return (
		<IconButton onClick={appStore.toggleDarkTheme} {...iconButtonProps}>
			<Brightness4OutlinedIcon />
		</IconButton>
	)
}
