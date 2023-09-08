import { Box, TextField, Typography } from '@thng/react'
import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
} from 'react-hook-form'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import {
	atleast8haratersRegex,
	atleastOneDigitRegex,
	atleastOneLowercaseRegex,
	atleastOneSpecialCharacterRegex,
	atleastOneUppercaseRegex,
} from 'playground/form/validations/regex'

export type PasswordTextFieldProps<
	TData extends FieldValues & { password: string },
> = {
	control: Control<TData>
	error?: FieldError
}

export const PasswordTextField = <
	TData extends FieldValues & { password: string },
>({
	control,
	error,
}: PasswordTextFieldProps<TData>) => {
	const ConditionChecker = ({
		condition,
		text,
	}: {
		condition: boolean
		text: string
	}) => {
		return (
			<Box sx={{ display: 'flex', gap: 1 }}>
				{condition ? (
					<CheckIcon color='success' />
				) : (
					<CloseIcon color='error' />
				)}
				<Typography>{text}</Typography>
			</Box>
		)
	}

	return (
		<Controller
			control={control}
			name={'password' as Path<TData>}
			render={({ field }) => (
				<Box>
					<TextField
						{...field}
						error={!!error}
						helperText={error?.message}
						label='Password'
						required
					/>

					{error && (
						<Box sx={{ pl: 1 }}>
							<ConditionChecker
								condition={atleastOneLowercaseRegex.test(
									field.value
								)}
								text='1 lowercase'
							/>

							<ConditionChecker
								condition={atleastOneUppercaseRegex.test(
									field.value
								)}
								text='1 uppercase'
							/>

							<ConditionChecker
								condition={atleastOneDigitRegex.test(
									field.value
								)}
								text='1 number'
							/>

							<ConditionChecker
								condition={atleastOneSpecialCharacterRegex.test(
									field.value
								)}
								text='1 special character'
							/>

							<ConditionChecker
								condition={atleast8haratersRegex.test(
									field.value
								)}
								text='At least 8 characters'
							/>
						</Box>
					)}
				</Box>
			)}
		/>
	)
}
