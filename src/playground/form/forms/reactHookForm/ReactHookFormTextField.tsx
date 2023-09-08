import { TextField } from '@thng/react'
import { PartialKey, Select, SelectProps, isDecimal } from '@thng/react'
import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	Path,
} from 'react-hook-form'

export type ReactHookFormTextFieldProps<TData extends FieldValues> = PartialKey<
	SelectProps,
	'options'
> & {
	control: Control<TData>
	errors?: FieldErrors<TData>
	name: Path<TData>
	isDecimalInput?: boolean
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
				helperText: errors[name]?.message as string | undefined,
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
					<Select
						{...field}
						{...textFieldProps}
						options={options}
						addEmptyOption={addEmptyOption}
					/>
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
