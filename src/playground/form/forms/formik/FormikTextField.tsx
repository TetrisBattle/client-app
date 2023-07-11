import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'
import { isFloat } from 'utility/numberHandler'

export interface SelectOption {
	value: string
	label: string
}

type FormikTextFieldProps = Omit<TextFieldProps, 'select'> & {
	name: string
	isFloatInput?: boolean
	options?: SelectOption[]
	addEmptyOption?: boolean
}

export const FormikTextField = ({
	name,
	isFloatInput,
	options,
	addEmptyOption,
	...otherProps
}: FormikTextFieldProps) => {
	const [field, meta, helpers] = useField(name)

	const textFieldProps = {
		error: meta.touched && !!meta.error,
		helperText: meta.touched && meta.error,
		...otherProps,
	}

	if (isFloatInput) {
		return (
			<TextField
				{...field}
				{...textFieldProps}
				onChange={(e) => {
					if (isFloat(e.target.value)) {
						helpers.setValue(e.target.value)
					}
				}}
			/>
		)
	}

	if (options) {
		return (
			<TextField {...field} {...textFieldProps} select>
				{addEmptyOption && <MenuItem value=''>&nbsp;</MenuItem>}
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		)
	}

	return <TextField {...field} {...textFieldProps} />
}
