import { useContext } from 'react'
import { StoreContext } from '../providers/StoreProvider'

export const useStore = () => {
	return useContext(StoreContext)
}
