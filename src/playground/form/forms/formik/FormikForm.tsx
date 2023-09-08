/* eslint-disable no-console */
import { Box, Button, InputAdornment } from '@thng/react'
import { LoadingButton, wait } from '@thng/react'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import { FormTitle } from '../../components/FormTitle'
import { mockOptions } from '../../options'
import { Data, defaultData, schema } from '../../validations/yupValidation'
import { FormikTextField } from './FormikTextField'

export const FormikForm = observer(() => {
	const handleCancel = () => {
		console.log('Cancel')
	}

	const save = async (data: Data) => {
		console.log('Saving...', data)
		await wait(1)
	}

	const handleFormSubmit = async (data: Data) => {
		await save(data).then(() => {
			console.log('Saved')
		})
	}

	return (
		<Box sx={{ p: 2 }}>
			<FormTitle>Formik Form</FormTitle>
			<Formik
				validationSchema={schema}
				enableReinitialize
				initialValues={defaultData}
				onSubmit={handleFormSubmit}
				// validateOnBlur={false}
			>
				{({ handleSubmit, isValid, isSubmitting, dirty }) => (
					<Box
						component='form'
						onSubmit={handleSubmit}
						sx={{
							maxWidth: 400,
							mx: 'auto',
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
						}}
					>
						<FormikTextField name='email' label='Email' required />

						<FormikTextField
							name='password'
							label='Password'
							required
						/>

						<FormikTextField
							name='option'
							label='Option'
							options={mockOptions}
							addEmptyOption
							required
						/>

						<FormikTextField
							name='price'
							label='Price'
							isDecimalInput
							required
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										EUR
									</InputAdornment>
								),
							}}
						/>

						<FormikTextField
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
								disabled={!isValid || isSubmitting || !dirty}
							>
								Save
							</LoadingButton>
						</Box>
					</Box>
				)}
			</Formik>
		</Box>
	)
})
