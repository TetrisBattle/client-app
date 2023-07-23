const combineRegExps = (...regExps: RegExp[]) => {
	const combined = regExps.map((r) => r.source).join('')
	return new RegExp(combined)
}

export const atleastOneLowercaseRegex = /(?=.*[a-z])/
export const atleastOneUppercaseRegex = /(?=.*[A-Z])/
export const atleastOneDigitRegex = /(?=.*\d)/
export const atleastOneSpecialCharacterRegex = /(?=.*[^a-zA-Z\d\s])/
export const atleast8haratersRegex = /.{8,}/
export const passwordRegex = combineRegExps(
	atleastOneLowercaseRegex,
	atleastOneUppercaseRegex,
	atleastOneDigitRegex,
	atleastOneSpecialCharacterRegex,
	atleast8haratersRegex
)

export const intRegex = /^\d+$/
export const decimalRegex = /^\d+\.?\d*$/
