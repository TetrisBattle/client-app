import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { RouteOption } from 'app/Routes'
import { routeToTitle } from 'app/Routes'

interface HeaderButtonProps {
	route: RouteOption
}

export const HeaderButton = ({ route }: HeaderButtonProps) => {
	return (
		<Button
			component={NavLink}
			to={route}
			variant='text'
			sx={(theme) => ({
				fontSize: '1.25rem',
				fontWeight: (theme) => theme.typography.fontWeightRegular,
				color: 'inherit',
				'&.active': theme.palette.mode === 'dark' && {
					color: theme.palette.primary.main,
				},
			})}
		>
			{routeToTitle(route)}
		</Button>
	)
}
