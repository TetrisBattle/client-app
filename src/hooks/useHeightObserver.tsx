import { useEffect, useState, RefObject, useRef } from 'react'

export const useHeightObserver = <T extends HTMLElement>(
	elementRef: RefObject<T>
): number => {
	const [height, setHeight] = useState(0)
	const observerRef = useRef<ResizeObserver | null>(null)

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { height } = entry.contentRect
				setHeight(height)
			}
		})

		observerRef.current = resizeObserver

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [])

	useEffect(() => {
		const currentRef = elementRef.current

		if (currentRef && observerRef.current) {
			observerRef.current.observe(currentRef)
		}

		return () => {
			if (currentRef && observerRef.current) {
				observerRef.current.unobserve(currentRef)
			}
		}
	}, [elementRef])

	return height
}
