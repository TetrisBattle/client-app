import { Box } from '@thng/react'
import { RouteOption } from 'App/Routes'
import { HeaderButton } from './HeaderButton'
import { HeaderMenu } from './HeaderMenu'

export const HeaderNav = ({ routes }: { routes: RouteOption[] }) => {
	return (
		<>
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
				{routes.map((route) => (
					<HeaderButton key={'headerButton-' + route} route={route} />
				))}
			</Box>
			<HeaderMenu routes={routes} />
		</>
	)
}
