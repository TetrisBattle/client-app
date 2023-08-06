export type SelectOption = {
	value: string
	label: string
}

export const toSelectOptions = (
	options: Record<string, string>
): SelectOption[] => {
	return Object.entries(options).map(([value, label]) => ({
		value,
		label,
	}))
}
