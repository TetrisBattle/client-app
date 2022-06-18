import React, { useState } from 'react'
import { IconButton, Menu } from '@mui/material'

interface IProps {
	icon: JSX.Element
	children: React.ReactNode
}

export default function MenuButton({ icon, children }: IProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	return (
		<>
			<IconButton onClick={(e: React.MouseEvent<HTMLElement>) =>
				setAnchorEl(e.currentTarget)
			}>
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
