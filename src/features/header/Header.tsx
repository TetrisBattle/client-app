import { AppBar, Box, Logo, Toolbar, Typography } from '@thng/react'
import { RouteOption } from 'Routes'
import { DarkThemeIconButton } from 'components/DarkThemeIconButton'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
	const headerRoutes = [RouteOption.Home, RouteOption.About]

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
					<HeaderNav routes={headerRoutes} />
					<DarkThemeIconButton sx={{ color: 'inherit' }} />
				</Box>
			</Toolbar>
		</AppBar>
	)
}
