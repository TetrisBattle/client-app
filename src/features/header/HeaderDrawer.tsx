import { Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton, Menu, MenuItem } from '@thng/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderRoutes } from './Header'

export const HeaderDrawer = ({ routes }: { routes: HeaderRoutes }) => {
	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen((prev) => !prev)

	return (
		<>
			<IconButton
				onClick={toggleOpen}
				sx={{
					color: 'inherit',
					display: { sm: 'none' },
				}}
			>
				<MenuIcon />
			</IconButton>

			<Drawer anchor='right' open={!!open} onClose={toggleOpen}>
				{routes.map(({ route, label }) => (
					<MenuItem
						key={route}
						component={NavLink}
						to={route}
						onClick={toggleOpen}
						sx={{
							'&.active': (theme) => ({
								color: theme.palette.primary.main,
							}),
						}}
					>
						{label}
					</MenuItem>
				))}
			</Drawer>
		</>
	)
}
