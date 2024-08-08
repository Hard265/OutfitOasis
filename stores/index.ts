import CartStore from './cart'

class Store {
  cartStore: CartStore

  constructor() {
    this.cartStore = new CartStore()
  }
}

export default new Store()
