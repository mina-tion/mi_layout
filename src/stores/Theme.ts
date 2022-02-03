import { observable, action, makeAutoObservable, computed } from 'mobx'
import { RootStore } from 'stores'
import { makeLocalStorage } from './makeLocalStorage'

export class ThemeStore {
  rootStore: RootStore

  @observable darkTheme: boolean = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
    makeLocalStorage(this, 'Store', ['darkTheme']);
  }

  @action
	changeTheme = () => {
		this.darkTheme = !this.darkTheme;
	}
}
