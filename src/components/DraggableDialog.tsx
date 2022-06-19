import { useRef } from 'react'
import {
	Dialog,
	DialogProps,
	DialogTitle,
	Paper,
	PaperProps,
	IconButton,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import Draggable from 'react-draggable'

function PaperComponent(props: PaperProps) {
	const nodeRef = useRef(null)

	return (
		<Draggable
			nodeRef={nodeRef}
			handle='.MuiDialogTitle-root'
			cancel={'[class*="MuiDialogContent-root"]'}
			bounds='parent'
		>
			<Paper ref={nodeRef} {...props} sx={{ margin: '0 !important' }} />
		</Draggable>
	)
}

interface IProps extends DialogProps {
	title: string
	onClose:
		| ((event: {}, reason?: 'backdropClick' | 'escapeKeyDown') => void)
		| undefined
}

export default function DraggableDialog(props: IProps) {
	const { title, children, ...baseProps } = props

	return (
		<>
			<Dialog PaperComponent={PaperComponent} {...baseProps}>
				<DialogTitle>
					{title}
					<IconButton onClick={props.onClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				{children}
			</Dialog>
		</>
	)
}
