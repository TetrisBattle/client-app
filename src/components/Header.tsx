import { AppBar, Toolbar, MenuItem } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuButton from './MenuButton'

function Header() {
	return (
		<AppBar>
			<Toolbar>
				<h1 style={{ flexGrow: 1 }}>Title</h1>
				<MenuButton icon={<MenuIcon />}>
					<MenuItem>one</MenuItem>
					<MenuItem>two</MenuItem>
				</MenuButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header
