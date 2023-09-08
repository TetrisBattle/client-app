import { makeAutoObservable } from 'mobx'

export class AppStore {
	isDarkMode = true

	constructor() {
		makeAutoObservable(this)
	}

	toggleDarkMode = () => {
		this.isDarkMode = !this.isDarkMode
	}
}
