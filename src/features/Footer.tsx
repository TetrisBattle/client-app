import { Box, Typography } from '@mui/material'

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
				borderTop: '1px solid gray',
			}}
		>
			<Typography>Footer</Typography>
		</Box>
	)
}
