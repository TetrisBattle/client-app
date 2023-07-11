import * as Yup from 'yup'

export const schema = Yup.object({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.matches(
			/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
			'Password must have 1 Uppercase, 1 Lowercase, 1 number and at least 8 characters'
		),
	option: Yup.string().required('Option is required'),
	price: Yup.string().required('Price is required'),
	description: Yup.string(),
})

export type Data = Yup.InferType<typeof schema>

export const defaultData: Data = {
	email: '',
	password: '',
	option: '',
	price: '',
	description: '',
}

// export const defaultData: Data = {
// 	email: 'test@test.com',
// 	password: 'Password123',
// 	option: '',
// 	price: '20',
// 	description: '',
// }
