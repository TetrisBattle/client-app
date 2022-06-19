import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, MenuItem, Typography, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuButton from './MenuButton'
import DarkThemeButton from './DarkThemeButton'

function Header() {
	const pages = ['Home', 'About']

	return (
		<AppBar>
			<Toolbar>
				<Typography variant='h1' sx={{ flexGrow: 1 }}>Title</Typography>
				<Box className='navButtons'>
					{pages.map((page) => (
						<Button key={page} component={Link} to={`/${page}`} variant='text'>
							{page}
						</Button>
					))}
				</Box>
				<MenuButton
					icon={<MenuIcon />}
					baseProps={{ className: 'menuIcon' }}
				>
					{pages.map((page) => (
						<MenuItem key={page} component={Link} to={`/${page}`}>
							{page}
						</MenuItem>
					))}
				</MenuButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header
