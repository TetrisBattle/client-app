import { makeAutoObservable } from 'mobx'

export class AppStore {
	isDarkTheme = true

	constructor() {
		makeAutoObservable(this)
	}

	toggleDarkTheme() {
		this.isDarkTheme = !this.isDarkTheme
	}
}
