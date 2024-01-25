import { Box, Button } from '@thng/react'
import { NavLink } from 'react-router-dom'
import { HeaderRoutes } from './Header'

export const HeaderButtons = ({ routes }: { routes: HeaderRoutes }) => {
	return (
		<Box
			sx={{
				height: 1,
				pr: 1,
				display: {
					xs: 'none',
					sm: 'flex',
				},
			}}
		>
			{routes.map(({ route, label }) => (
				<Button
					key={route}
					component={NavLink}
					to={route}
					variant='text'
					sx={(theme) => ({
						fontSize: '1.25rem',
						fontWeight: (theme) =>
							theme.typography.fontWeightRegular,
						color: 'inherit',
						'&.active': theme.palette.mode === 'dark' && {
							color: theme.palette.primary.main,
						},
					})}
				>
					{label}
				</Button>
			))}
		</Box>
	)
}
