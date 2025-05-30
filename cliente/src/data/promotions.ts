import { Promotion } from '../types';

// Set promotions with end dates a few days from now
const today = new Date();
const threeDaysFromNow = new Date(today);
threeDaysFromNow.setDate(today.getDate() + 3);

const fiveDaysFromNow = new Date(today);
fiveDaysFromNow.setDate(today.getDate() + 5);

const weekFromNow = new Date(today);
weekFromNow.setDate(today.getDate() + 7);

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "3x2 en Empanadas",
    description: "Compra 3 empanadas y paga solo 2. Válido para cualquier sabor.",
    imageUrl: "https://images.pexels.com/photos/8308020/pexels-photo-8308020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discountPercentage: 33,
    endDate: threeDaysFromNow
  },
  {
    id: 2,
    title: "Combo de 12 pasteles con 25% OFF",
    description: "Lleva 12 pasteles de yuca con un increíble 25% de descuento.",
    imageUrl: "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discountPercentage: 25,
    endDate: fiveDaysFromNow
  },
  {
    id: 3,
    title: "Desayuno Completo",
    description: "4 empanadas + 2 jugos naturales a precio especial.",
    imageUrl: "https://images.pexels.com/photos/5718031/pexels-photo-5718031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    discountPercentage: 20,
    endDate: weekFromNow
  }
];