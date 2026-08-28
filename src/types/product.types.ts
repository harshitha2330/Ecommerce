export interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  categoryId: number
  categoryName: string
  stockQuantity: number
  rating: number
  reviewCount: number
  active: boolean
}

export interface ProductQuery {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: number;
  sort?: string;
}
