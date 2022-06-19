import React, { useState } from 'react'
import { IconButton, IconButtonProps, Menu } from '@mui/material'

interface IProps {
	icon: JSX.Element
	baseProps?: IconButtonProps
	children: React.ReactNode
}

export default function MenuButton({ icon, baseProps, children }: IProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	return (
		<>
			<IconButton
				onClick={(e: React.MouseEvent<HTMLElement>) =>
					setAnchorEl(e.currentTarget)
				}
				{...baseProps}
			>
				{icon}
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClick={() => setAnchorEl(null)}
				onClose={() => setAnchorEl(null)}
			>
				{children}
			</Menu>
		</>
	)
}
