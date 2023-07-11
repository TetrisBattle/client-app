import { z } from 'zod'

export const schema = z.object({
	email: z.string().nonempty('Email is required').email('Invalid email'),
	password: z
		.string()
		.nonempty('Password is required')
		.refine(
			(value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value),
			'Password must have 1 Uppercase, 1 Lowercase, 1 number and at least 8 characters'
		),
	option: z.string().nonempty('Option is required'),
	price: z.string().nonempty('Price is required'),
	description: z.string(),
})

export type Data = z.infer<typeof schema>

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
