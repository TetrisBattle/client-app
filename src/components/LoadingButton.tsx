import { Button, ButtonProps, CircularProgress } from '@mui/material'
import { useRef } from 'react'

type LoadingButtonProps = ButtonProps & {
	loading: boolean
}

export const LoadingButton = ({
	loading,
	children,
	...props
}: LoadingButtonProps) => {
	const loadingButtonRef = useRef<HTMLButtonElement>(null)

	return (
		<Button
			ref={loadingButtonRef}
			{...props}
			sx={{
				width: loadingButtonRef.current
					? // +1 to fix rounding issues
					  loadingButtonRef.current.clientWidth + 1
					: null,
				height: loadingButtonRef.current?.clientHeight,
				...props.sx,
			}}
		>
			{loading ? (
				<CircularProgress color='inherit' size={24} />
			) : (
				children
			)}
		</Button>
	)
}
