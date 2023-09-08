/* eslint-disable no-console */
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, InputAdornment } from '@thng/react'
import { LoadingButton, wait } from '@thng/react'
import { useForm } from 'react-hook-form'
import { FormTitle } from '../../components/FormTitle'
import { mockOptions } from '../../options'
import { Data, defaultData, schema } from '../../validations/zodValidation'
import { ReactHookFormTextField } from './ReactHookFormTextField'
import { PasswordTextField } from './PasswordTextField'

export const ReactHookForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid, isDirty },
	} = useForm<Data>({
		mode: 'all',
		defaultValues: defaultData,
		resolver: zodResolver(schema),
	})

	const handleCancel = () => {
		console.log('Cancel')
	}

	const save = async (data: Data) => {
		console.log('Saving...', data)
		await wait(1)
	}

	const onSubmit = handleSubmit(async (data: Data) => {
		await save(data).then(() => {
			console.log('Saved')
		})
	})

	return (
		<Box sx={{ p: 2 }}>
			<FormTitle>React Hook Form</FormTitle>
			<Box
				component='form'
				onSubmit={onSubmit}
				sx={{
					maxWidth: 400,
					mx: 'auto',
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<ReactHookFormTextField
					control={control}
					errors={errors}
					name='email'
					label='Email'
					required
				/>

				<PasswordTextField control={control} error={errors.password} />

				<ReactHookFormTextField
					control={control}
					errors={errors}
					name='option'
					label='Option'
					required
					options={mockOptions}
					addEmptyOption
				/>

				<ReactHookFormTextField
					control={control}
					errors={errors}
					name='price'
					label='Price'
					required
					isDecimalInput
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>EUR</InputAdornment>
						),
					}}
				/>

				<ReactHookFormTextField
					control={control}
					errors={errors}
					name='description'
					label='Description'
					multiline
					minRows={3}
				/>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						gap: 1,
					}}
				>
					<Button variant='outlined' onClick={handleCancel}>
						Cancel
					</Button>

					<LoadingButton
						isLoading={isSubmitting}
						type='submit'
						disabled={!isValid || isSubmitting || !isDirty}
					>
						Save
					</LoadingButton>
				</Box>
			</Box>
		</Box>
	)
}
