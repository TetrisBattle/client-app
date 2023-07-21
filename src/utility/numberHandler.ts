function isNumber(value: string) {
	if (Number(value) && !/\s/.test(value)) return true
	return false
}

export function isInt(value: string) {
	if (value === '') return true
	else if (value.slice(-1) === '.') return false
	else if (isNumber(value)) return true
	return false
}

export function isDecimal(value: string, decimals = 2) {
	const currentDecimals = value.split('.')?.[1]
	if (value === '') return true
	else if (currentDecimals && currentDecimals.length > decimals) return false
	else if (isNumber(value)) return true
	return false
}
