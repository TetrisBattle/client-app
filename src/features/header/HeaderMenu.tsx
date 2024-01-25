import { Menu as MenuIcon } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@thng/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderRoutes } from './Header'

export const HeaderMenu = ({ routes }: { routes: HeaderRoutes }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	return (
		<>
			<IconButton
				onClick={(e: React.MouseEvent<HTMLElement>) =>
					setAnchorEl(e.currentTarget)
				}
				sx={{
					color: 'inherit',
					display: { sm: 'none' },
				}}
			>
				<MenuIcon />
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClick={() => setAnchorEl(null)}
				onClose={() => setAnchorEl(null)}
			>
				{routes.map(({ route, label }) => (
					<MenuItem
						key={route}
						component={NavLink}
						to={route}
						sx={{
							'&.active': (theme) => ({
								color: theme.palette.primary.main,
							}),
						}}
					>
						{label}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
