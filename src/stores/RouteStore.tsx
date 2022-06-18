import { makeAutoObservable } from 'mobx'

export default class RouteStore {
	private _routes = {

	}

	constructor() {
		makeAutoObservable(this)
	}

	get routes() {
		return this._routes
	}
}
