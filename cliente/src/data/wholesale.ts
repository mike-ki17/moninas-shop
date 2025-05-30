import { WholesalePrice } from '../types';

export const wholesalePrices: Record<string, WholesalePrice[]> = {
  "empanadas": [
    { quantity: 25, pricePerUnit: 2.00 },
    { quantity: 50, pricePerUnit: 1.80 },
    { quantity: 100, pricePerUnit: 1.60 },
    { quantity: 200, pricePerUnit: 1.40 }
  ],
  "pasteles": [
    { quantity: 25, pricePerUnit: 2.25 },
    { quantity: 50, pricePerUnit: 2.00 },
    { quantity: 100, pricePerUnit: 1.85 },
    { quantity: 200, pricePerUnit: 1.65 }
  ]
};

export const wholesaleBenefits = [
  {
    title: "Precios Especiales",
    description: "Descuentos exclusivos por volumen de compra",
    icon: "Percent"
  },
  {
    title: "Entrega a Domicilio",
    description: "Entrega gratuita para pedidos mayoristas",
    icon: "Truck"
  },
  {
    title: "Personalización",
    description: "Posibilidad de personalizar sabores según necesidades",
    icon: "Settings"
  },
  {
    title: "Facturación",
    description: "Emisión de facturas para tu negocio",
    icon: "Receipt"
  }
];