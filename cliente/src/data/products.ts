import { Product } from '../types';
import product_001 from '../../public/productos/producto_001.png';
import product_002 from '../../public/productos/producto_002.png';
import product_003 from '../../public/productos/producto_003.png';

export const products: Product[] = [
  // {
  //   id: 1,
  //   name: "Empanada de Carne",
  //   description: "Deliciosa empanada rellena de carne molida sazonada con especies tradicionales",
  //   price: 2.50,
  //   imageUrl: "https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "empanadas",
  //   popular: true,
  //   ingredients: ["Masa de maíz", "Carne molida", "Cebolla", "Ajo", "Comino", "Pimentón"]
  // },
  // {
  //   id: 2,
  //   name: "Empanada de Pollo",
  //   description: "Empanada tradicional con pollo desmenuzado y verduras",
  //   price: 2.50,
  //   imageUrl: "https://images.pexels.com/photos/15899049/pexels-photo-15899049/free-photo-of-comida-mano-restaurante-carne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "empanadas",
  //   popular: true,
  //   ingredients: ["Masa de maíz", "Pollo", "Cebolla", "Zanahoria", "Arvejas", "Especias"]
  // },
  // {
  //   id: 3,
  //   name: "Empanada de Queso",
  //   description: "Empanada rellena de queso derretido, simple y deliciosa",
  //   price: 2.00,
  //   imageUrl: "https://images.pexels.com/photos/18511345/pexels-photo-18511345/free-photo-of-comida-plato-vegetales-cena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "empanadas",
  //   ingredients: ["Masa de maíz", "Queso mozzarella", "Queso blanco"]
  // },
  {
    id: 4,
    name: "Pasteles de Yuca x5",
    description: "5 Pastelitos de yuca rellenos de queso, crujiente por fuera y suave por dentro",
    price: 15000,
    imageUrl: product_001,
    category: "pasteles",
    popular: true,
    ingredients: ["Yuca", "Queso", "Mantequilla", "Huevo", "Sal"]
  },
  // {
  //   id: 5,
  //   name: "Pastel de Carne",
  //   description: "Pastel de yuca con delicioso relleno de carne molida sazonada",
  //   price: 3.00,
  //   imageUrl: "https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "pasteles",
  //   ingredients: ["Yuca", "Carne molida", "Cebolla", "Pimiento", "Especias"]
  // },
  // {
  //   id: 6,
  //   name: "Empanada Mixta",
  //   description: "Empanada con relleno mixto de carne y queso",
  //   price: 3.25,
  //   imageUrl: "https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "empanadas",
  //   popular: true,
  //   ingredients: ["Masa de maíz", "Carne molida", "Queso", "Cebolla", "Especias"]
  // },
  {
    id: 7,
    name: "Pasteles de Yuca x3",
    description: "3 Pastelitos de yuca rellenos de queso, crujiente por fuera y suave por dentro",
    price: 9000,
    imageUrl: product_002,
    category: "pasteles",
    popular: true,
    ingredients: ["Yuca", "Queso", "Mantequilla", "Huevo", "Sal"]
  },
  {
    id: 8,
    name: "Empanadas x4",
    description: "4 Empanadas tradicionales con pollo desmenuzado",
    price: 12000,
    imageUrl: product_003,
    category: "empanadas",
    popular: true,
    ingredients: ["Yuca", "Queso", "Mantequilla", "Huevo", "Sal"]
  },
  // {
  //   id: 7,
  //   name: "Jugo Natural",
  //   description: "Refrescante jugo de frutas naturales",
  //   price: 1.75,
  //   imageUrl: "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "bebidas",
  //   ingredients: ["Fruta de temporada", "Agua", "Azúcar opcional"]
  // },
  // {
  //   id: 8,
  //   name: "Combo Familiar",
  //   description: "10 empanadas variadas con 2 jugos grandes",
  //   price: 24.99,
  //   imageUrl: "https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   category: "combos",
  //   popular: true
  // }
];

export const productCategories = [
  { id: "all", name: "Todos" },
  { id: "empanadas", name: "Empanadas" },
  { id: "pasteles", name: "Pasteles de Yuca" },
  // { id: "bebidas", name: "Bebidas" },
  // { id: "combos", name: "Combos" }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.popular);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};