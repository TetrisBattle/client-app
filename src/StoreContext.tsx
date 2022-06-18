import { createContext, useContext } from 'react'
import RootStore from 'stores/RootStore'

const StoreContext = createContext<RootStore>({} as RootStore)

interface IProps {
	children: React.ReactNode;
}

export function StoreContextProvider({ children }: IProps) {
	const rootStore = new RootStore()

	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}

export function useStoreContext() {
	return useContext(StoreContext)
}
