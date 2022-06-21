import { Link } from 'react-router-dom'
import {
	AppBar,
	Toolbar,
	Button,
	MenuItem,
	Typography,
	Box,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuButton from './MenuButton'
import DarkThemeButton from './DarkThemeButton'

function Header() {
	const pages = ['Home', 'About']

	return (
		<AppBar>
			<Toolbar sx={{ p: 1 }}>
				<Typography variant='h1' sx={{ pl: 1, flexGrow: 1 }}>
					Title
				</Typography>
				<Box
					sx={{
						display: {
							xs: 'none',
							sm: 'unset',
						},
					}}
				>
					<Box sx={{ pr: 1 }}>
						{pages.map((page) => (
							<Button
								key={page}
								component={Link}
								to={`/${page}`}
								variant='text'
								color='inherit'
								sx={{ '&:hover': { bgcolor: 'transparent' }, fontSize: '1.25rem' }}
							>
								{page}
							</Button>
						))}
					</Box>
				</Box>
				<MenuButton
					sx={{
						color: 'inherit',
						display: {
							sm: 'none',
						},
					}}
					icon={<MenuIcon />}
				>
					{pages.map((page) => (
						<MenuItem key={page} component={Link} to={`/${page}`}>
							{page}
						</MenuItem>
					))}
				</MenuButton>
				<DarkThemeButton />
			</Toolbar>
		</AppBar>
	)
}

export default Header
