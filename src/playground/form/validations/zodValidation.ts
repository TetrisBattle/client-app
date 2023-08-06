import { z } from 'zod'
import { decimalRegex, passwordRegex } from './regex'
import { validationErrors } from './validationErrors'

export const schema = z.object({
	email: z
		.string()
		.nonempty(validationErrors.required)
		.email()
		.max(100, validationErrors.maxCharacters(100)),
	password: z
		.string()
		.nonempty(validationErrors.required)
		.regex(passwordRegex, validationErrors.password)
		.max(100, validationErrors.maxCharacters(100)),
	option: z.string().nonempty(validationErrors.required),
	price: z
		.string()
		.nonempty(validationErrors.required)
		.regex(decimalRegex, validationErrors.number),
	description: z.string().max(400, validationErrors.maxCharacters(400)),
})

export type Data = z.infer<typeof schema>

// export const defaultData: Data = {
// 	email: '',
// 	password: '',
// 	option: '',
// 	price: '',
// 	description: '',
// }

export const defaultData: Data = {
	email: 'test@test.com',
	password: 'Password123!',
	option: '',
	price: '20',
	description: '',
}
