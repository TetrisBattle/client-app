import { useContext } from 'react'
import { StoreContext } from './StoreContextProvider'

export const useStoreContext = () => {
	return useContext(StoreContext)
}
