import { makeAutoObservable } from 'mobx'
import Home from 'pages/Home'
import About from 'pages/About'

interface Page {
	id: string,
	path: string,
	element: React.ReactElement
}

export default class AppStore {
	private _isDarkTheme = true
	private _isLoading = false
	private _pages: Page[] = [
		{ id: 'Home', path: '/Home', element: <Home /> },
		{ id: 'About', path: '/About', element: <About /> },
	]
	private _selectedPage = this._pages[0]

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

	get pages() {
		return this._pages
	}

	get selectedPage() {
		return this._selectedPage
	}

	set selectedPage(value) {
		this._selectedPage = value
	}
}
