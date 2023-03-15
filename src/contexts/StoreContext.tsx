import { createContext, useContext } from 'react'
import RootStore from 'stores/RootStore'

type Props = {
	children: React.ReactNode
}

const rootStore = new RootStore()
const StoreContext = createContext(rootStore)

export function StoreContextProvider({ children }: Props) {
	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}

export function useStoreContext() {
	return useContext(StoreContext)
}
