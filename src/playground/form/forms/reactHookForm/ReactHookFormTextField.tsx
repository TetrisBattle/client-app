import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	Path,
} from 'react-hook-form'
import { isDecimal } from 'utility/numberHandler'

export type SelectOption = {
	value: string
	label: string
}

export type ReactHookFormTextFieldProps<TData extends FieldValues> = Omit<
	TextFieldProps,
	'select'
> & {
	control: Control<TData>
	errors?: FieldErrors<TData>
	name: Path<TData>
	isDecimalInput?: boolean
	options?: SelectOption[]
	addEmptyOption?: boolean
}

export const ReactHookFormTextField = <TData extends FieldValues>({
	control,
	errors,
	name,
	isDecimalInput,
	options,
	addEmptyOption,
	...otherProps
}: ReactHookFormTextFieldProps<TData>) => {
	const textFieldProps = errors
		? {
				error: !!errors[name],
				helperText: errors[name]?.message as string,
				...otherProps,
		  }
		: otherProps

	if (isDecimalInput) {
		return (
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<TextField
						{...field}
						{...textFieldProps}
						onChange={(e) => {
							if (isDecimal(e.target.value)) {
								field.onChange(e)
							}
						}}
					/>
				)}
			/>
		)
	}

	if (options) {
		return (
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<TextField {...field} select {...textFieldProps}>
						{addEmptyOption && <MenuItem value=''>&nbsp;</MenuItem>}
						{options.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
		)
	}

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => <TextField {...field} {...textFieldProps} />}
		/>
	)
}
