import { Box } from '@mui/material'
import { Typography } from '@thng/react'

export const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				mt: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				py: 2,
				px: 3,
				borderTop: (theme) =>
					`1px solid ${theme.palette.secondary.main}`,
			}}
		>
			<Typography>Footer</Typography>
		</Box>
	)
}
