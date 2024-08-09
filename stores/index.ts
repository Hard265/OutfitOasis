import CartStore from './cart'
import ProductsStore from './products'

class Store {
  productsStore: ProductsStore
  cartStore: CartStore

  constructor() {
    this.productsStore = new ProductsStore()
    this.cartStore = new CartStore()
  }
}

export default new Store()
