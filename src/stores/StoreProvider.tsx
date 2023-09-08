import { createContext } from 'react'
import { RootStore } from 'stores/RootStore'

const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}
