import * as Yup from 'yup'
import { decimalRegex, passwordRegex } from './regex'
import { validationErrors } from './validationErrors'

export const schema = Yup.object({
	email: Yup.string()
		.required(validationErrors.required)
		.email(validationErrors.email)
		.max(100, validationErrors.maxCharacters(100)),
	password: Yup.string()
		.required(validationErrors.required)
		.matches(passwordRegex, validationErrors.password)
		.max(100, validationErrors.maxCharacters(100)),
	option: Yup.string().required(validationErrors.required),
	price: Yup.string()
		.required(validationErrors.required)
		.matches(decimalRegex, validationErrors.number),
	description: Yup.string().max(400, validationErrors.maxCharacters(400)),
})

export type Data = Yup.InferType<typeof schema>

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
