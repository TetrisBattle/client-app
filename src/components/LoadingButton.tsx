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
				width: loadingButtonRef.current?.clientWidth,
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
