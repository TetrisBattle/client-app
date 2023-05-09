import { RouteOption } from 'enums/RouteOption'

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}

if (import.meta.vitest) {
	const { describe, expect, it } = import.meta.vitest
	describe('#routeToTitle', () => {
		it('should capitalize first letter of route', () => {
			expect(routeToTitle(RouteOption.Home)).toBe('Home')
			expect(routeToTitle(RouteOption.About)).toBe('About')
		})
	})
}
