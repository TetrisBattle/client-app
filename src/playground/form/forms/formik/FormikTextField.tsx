import { TextField } from '@thng/react'
import { PartialKey, Select, SelectProps, isDecimal } from '@thng/react'
import { useField } from 'formik'

type FormikTextFieldProps = PartialKey<SelectProps, 'options'> & {
	name: string
	isDecimalInput?: boolean
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
			<Select
				{...field}
				{...textFieldProps}
				options={options}
				addEmptyOption={addEmptyOption}
			/>
		)
	}

	return <TextField {...field} {...textFieldProps} />
}
