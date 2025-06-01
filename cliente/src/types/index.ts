export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  popular?: boolean;
  ingredients?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  discountPercentage: number;
  endDate: Date;
}

export interface WholesalePrice {
  quantity: number;
  pricePerUnit: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  isWholesale: boolean;
}