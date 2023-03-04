import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import HeaderMenu from './HeaderMenu'
import DarkThemeIconButton from '../DarkThemeIconButton'
import HeaderButton from './HeaderButton'
import { ReactComponent as Logo } from 'assets/Logo.svg'

export default function Header() {
	return (
		<AppBar>
			<Toolbar sx={{ p: 1 }}>
				<Logo width={48} height={48} />
				<Typography variant='h1' sx={{ pl: 1, flexGrow: 1, fontSize: 32 }}>
					Site
				</Typography>
				<Box
					sx={{
						pr: 1,
						display: {
							xs: 'none',
							sm: 'block',
						},
					}}
				>
					<HeaderButton route='home' />
					<HeaderButton route='about' />
				</Box>
				<HeaderMenu routes={['home', 'about']} />
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}
