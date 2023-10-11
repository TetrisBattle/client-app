import { Button } from '@thng/react'
import { RouteOption, routeToTitle } from 'App/Routes'
import { NavLink } from 'react-router-dom'

type HeaderButtonProps = {
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
