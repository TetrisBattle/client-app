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
import MenuIconButton from './MenuIconButton'
import DarkThemeIconButton from './DarkThemeIconButton'
import { useStoreContext } from 'contexts/StoreContext'

const Header = () => {
	const { appStore } = useStoreContext()

	return (
		<AppBar>
			<Toolbar sx={{ p: 1 }}>
				<Typography variant='h1' sx={{ pl: 1, flexGrow: 1 }}>
					Site
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
						{appStore.pages.map((page) => (
							<Button
								key={page.path}
								onClick={() => appStore.selectedPage = page}
								component={Link}
								to={page.path}
								variant='text'
								color='inherit'
								sx={{ '&:hover': { bgcolor: 'transparent' }, fontSize: '1.25rem' }}
							>
								{page.id}
							</Button>
						))}
					</Box>
				</Box>
				<MenuIconButton
					sx={{
						color: 'inherit',
						display: {
							sm: 'none',
						},
					}}
					icon={<MenuIcon />}
				>
					{appStore.pages.map((page) => (
						<MenuItem key={page.path} onClick={() => appStore.selectedPage = page} component={Link} to={page.path}>
							{page.id}
						</MenuItem>
					))}
				</MenuIconButton>
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}

export default Header
