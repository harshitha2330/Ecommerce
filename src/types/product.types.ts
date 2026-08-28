export type Product = {
  id: string
  name: string
  description?: string
  price: number
  imageUrl?: string
  categoryId?: string
  stock?: number
}

export type ProductQuery = {
  page?: number
  limit?: number
  search?: string
  categoryId?: string
  sort?: string
}
