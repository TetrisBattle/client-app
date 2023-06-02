import { useContext } from 'react'
import { StoreContext } from './StoreContextProvider'

export const useStore = () => {
	return useContext(StoreContext)
}
