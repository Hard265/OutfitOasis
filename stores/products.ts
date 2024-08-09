import { action, makeAutoObservable, observable } from 'mobx'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

class ProductsStore {
  items = [
    {
      id: '1',
      name: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dicta consectetur. Libero excepturi sit nemo incidunt voluptas tempore ullam. Iure?',
      price: 100,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dicta consectetur. Libero excepturi sit nemo incidunt voluptas tempore ullam. Iure?',
      price: 200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '3',
      name: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dicta consectetur. Libero excepturi sit nemo incidunt voluptas tempore ullam. Iure?',
      price: 200,
      image: 'https://via.placeholder.com/150'
    }
  ]

  constructor() {
    makeAutoObservable(this, {
      items: observable,
      fetchProducts: action
    })
  }

  async fetchProducts() {
    // Fetch products from API
  }
}

export default ProductsStore
