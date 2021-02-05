import { action, makeAutoObservable, observable } from "mobx";

class Store {
  @observable
  heroes

  constructor() {
    makeAutoObservable(this)
    this.heroes = []
  }

  @action
  async get() {
    const apiHeroes = 'http://localhost:5000/api/hero'
    await fetch(apiHeroes)
      .then(response => response.json())
      .then(json => {
        this.heroes = [...this.heroes, ...json]
      })
  }
}

export default new Store();