import {
	AppBar,
	Box,
	DarkThemeIconButton,
	Logo,
	Toolbar,
	Typography,
} from '@thng/react'
import { RouteOption } from 'Routes'
import { HeaderButtons } from './HeaderButtons'
import { HeaderDrawer } from './HeaderDrawer'

export type HeaderRoutes = {
	route: RouteOption
	label: string
}[]

export const Header = () => {
	const headerRoutes: HeaderRoutes = [
		{ route: RouteOption.Home, label: 'Home' },
		{ route: RouteOption.About, label: 'About' },
	]

	return (
		<AppBar>
			<Toolbar sx={{ height: 64, px: 1 }}>
				<Logo size={48} />
				<Typography
					variant='h1'
					sx={{
						pl: 1,
						fontSize: 32,
					}}
				>
					ClientApp
				</Typography>
				<Box
					sx={{
						width: 1,
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					<HeaderButtons routes={headerRoutes} />
					<HeaderDrawer routes={headerRoutes} />
					<DarkThemeIconButton />
				</Box>
			</Toolbar>
		</AppBar>
	)
}
