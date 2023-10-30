import { Menu as MenuIcon } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@thng/react'
import { RouteOption, routeToTitle } from 'App/Routes'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type HeaderMenuProps = {
	routes: RouteOption[]
}

export const HeaderMenu = ({ routes }: HeaderMenuProps) => {
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
				{routes.map((route) => (
					<MenuItem
						key={'headerMenuItem-' + route}
						component={NavLink}
						to={route}
						sx={{
							'&.active': (theme) => ({
								color: theme.palette.primary.main,
							}),
						}}
					>
						{routeToTitle(route)}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
