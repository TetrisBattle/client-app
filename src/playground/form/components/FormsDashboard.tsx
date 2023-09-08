import { Box, Button } from '@thng/react'
import { RouteOption } from 'app/Routes'
import { Link } from 'react-router-dom'

export const Forms = () => {
	return (
		<Box
			sx={{
				p: 3,
				display: 'flex',
				justifyContent: 'center',
				gap: 2,
			}}
		>
			<Button component={Link} to={RouteOption.FormikForm}>
				Formik Form
			</Button>
			<Button component={Link} to={RouteOption.ReactHookForm}>
				React Hook Form
			</Button>
		</Box>
	)
}
