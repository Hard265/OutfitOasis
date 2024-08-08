declare global {
  type PartialCustom<T, K> = { [P in keyof T]: T[P] | K }
}

export {}
