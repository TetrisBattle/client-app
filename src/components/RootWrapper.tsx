import { Box } from '@mui/material'
import Header from 'components/Header'
import { ReactChildren } from 'interfaces/react'

export default function RootWrapper({ children }: ReactChildren) {

	return (
		<Box
			sx={(theme) => ({
				bgcolor: theme.palette.background.default,
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				color: theme.palette.text.primary,
			})}
		>
			<Header />
			<Box>{children}</Box>
		</Box>
	)
}
