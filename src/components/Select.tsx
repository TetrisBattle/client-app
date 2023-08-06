import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'
import { SelectOption } from 'utility/selectHandler'

export type SelectProps = Omit<TextFieldProps, 'select'> & {
	options: SelectOption[]
	addEmptyOption?: boolean
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
	({ options, addEmptyOption, ...otherProps }, ref) => {
		return (
			<TextField
				ref={ref}
				select
				SelectProps={{
					onClose: () => {
						setTimeout(() => {
							;(document.activeElement as HTMLElement).blur()
						}, 0)
					},
				}}
				{...otherProps}
			>
				{addEmptyOption && <MenuItem value=''>&nbsp;</MenuItem>}
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		)
	}
)
