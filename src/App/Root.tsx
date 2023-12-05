import { Box } from '@thng/react'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Outlet } from 'react-router-dom'

export const Root = () => {
	return (
		<Box
			sx={{
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Header />
			<Outlet />
			<Footer />
		</Box>
	)
}
