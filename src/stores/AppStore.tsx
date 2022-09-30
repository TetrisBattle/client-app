import { makeAutoObservable } from 'mobx'
import Home from 'pages/Home'
import About from 'pages/About'

export default class AppStore {
	private _isDarkTheme = true
	private _isLoading = false
	private _routes = [
		{ label: 'Home', path: '/home', element: <Home /> },
		{ label: 'About', path: '/about', element: <About /> },
	]

	constructor() {
		makeAutoObservable(this)
	}

	get isDarkTheme() {
		return this._isDarkTheme
	}

	toggleDarkTheme = () => {
		this._isDarkTheme = !this._isDarkTheme
	}

	get isLoading() {
		return this._isLoading
	}

	set isLoading(value) {
		this._isLoading = value
	}

	get routes() {
		return this._routes
	}
}
