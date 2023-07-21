import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'
import { isDecimal } from 'utility/numberHandler'

export type SelectOption = {
	value: string
	label: string
}

type FormikTextFieldProps = Omit<TextFieldProps, 'select'> & {
	name: string
	isDecimalInput?: boolean
	options?: SelectOption[]
	addEmptyOption?: boolean
}

export const FormikTextField = ({
	name,
	isDecimalInput,
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

	if (isDecimalInput) {
		return (
			<TextField
				{...field}
				{...textFieldProps}
				onChange={(e) => {
					if (isDecimal(e.target.value)) {
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
