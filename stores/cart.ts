import { action, computed, makeAutoObservable, observable } from 'mobx'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity?: number
}

class CartStore {
  items: CartItem[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 10,
      image: 'https://picsum.photos/200',
      quantity: 4
    },
    {
      id: '2',
      name: 'Product 2',
      price: 20,
      image: 'https://picsum.photos/200',
      quantity: 1
    }
  ]

  constructor() {
    makeAutoObservable(this, {
      items: observable,
      totalPrice: computed,
      shippingPrice: computed,
      addItem: action,
      updateItem: action
    })
  }

  get totalItems() {
    return this.items.reduce((total, item) => total + (item.quantity || 1), 0)
  }

  get totalPrice() {
    return this.items.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    )
  }

  get shippingPrice() {
    return this.totalPrice * 0.1
  }

  addItem(item: any) {
    this.items.push(item)
  }

  updateItem(params: Pick<CartItem, 'id'> & Partial<CartItem>) {
    const index = this.items.findIndex((item) => item.id === params.id)
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...params }
    }
  }
}

export default CartStore
