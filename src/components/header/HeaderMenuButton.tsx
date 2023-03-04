import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Route } from 'types'
import { NavLink } from 'react-router-dom'

type Props = {
	routes: Route[]
}

export default function HeaderMenuButtom({ routes }: Props) {
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
						to={'/' + route}
						sx={{
							'&.active': (theme) => ({
								color: theme.palette.primary.main,
							}),
						}}
					>
						{route.charAt(0).toUpperCase() + route.slice(1)}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
