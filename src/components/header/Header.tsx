import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { HeaderMenu } from './HeaderMenu'
import { DarkThemeIconButton } from '../DarkThemeIconButton'
import { HeaderButton } from './HeaderButton'
import { Logo } from 'assets/Logo.tsx'
import { RouteOption } from 'app/Routes'

export const Header = () => {
	return (
		<AppBar>
			<Toolbar sx={{ height: 64, px: 1 }}>
				<Logo width={48} height={48} />
				<Typography
					variant='h1'
					sx={{
						pl: 1,
						flexGrow: 1,
						fontSize: 32,
					}}
				>
					ClientApp
				</Typography>
				<Box
					sx={{
						height: 1,
						pr: 1,
						display: {
							xs: 'none',
							sm: 'flex',
						},
					}}
				>
					<HeaderButton route={RouteOption.Home} />
					<HeaderButton route={RouteOption.About} />
				</Box>
				<HeaderMenu routes={[RouteOption.Home, RouteOption.About]} />
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}
