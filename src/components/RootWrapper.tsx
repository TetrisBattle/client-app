import { useTheme, Box } from '@mui/material'
import Header from 'components/Header'

interface IProps {
	children: React.ReactNode
}

export default function RootWrapper({ children }: IProps) {
	const theme = useTheme()

	return (
		<Box
			sx={{
				bgcolor: theme.palette.background.default,
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				color: theme.palette.text.primary,
			}}
		>
			<Header />
			<Box>{children}</Box>
		</Box>
	)
}
