import { Brightness4Outlined as Brightness4OutlinedIcon } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@thng/react'
import { useStore } from 'hooks/useStore'

export const DarkThemeIconButton = (iconButtonProps: IconButtonProps) => {
	const { appStore } = useStore()

	return (
		<IconButton onClick={appStore.toggleDarkMode} {...iconButtonProps}>
			<Brightness4OutlinedIcon />
		</IconButton>
	)
}
