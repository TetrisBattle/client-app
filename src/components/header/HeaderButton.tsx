import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Route } from 'types'

type Props = {
	route: Route
}

export default function HeaderButton({ route }: Props) {
	return (
		<Button
			component={NavLink}
			to={'/' + route}
			variant='text'
			sx={(theme) => ({
				'&:hover': { bgcolor: 'transparent' },
				fontSize: '1.25rem',
				fontWeight: (theme) => theme.typography.fontWeightRegular,
				color: 'inherit',
				'&.active': theme.palette.mode === 'dark' && {
					color: theme.palette.primary.main,
				},
			})}
		>
			{route.charAt(0).toUpperCase() + route.slice(1)}
		</Button>
	)
}
