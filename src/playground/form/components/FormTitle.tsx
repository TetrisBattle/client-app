import { Typography } from '@thng/react'

export const FormTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<Typography
			variant='h1'
			sx={{
				mb: 2,
				textAlign: 'center',
				fontWeight: (theme) => theme.typography.fontWeightBold,
				color: (theme) => theme.palette.primary.main,
				fontSize: '2.25rem',
			}}
		>
			{children}
		</Typography>
	)
}
