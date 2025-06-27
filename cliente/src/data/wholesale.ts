import { WholesalePrice } from '../types';

export const wholesalePrices: Record<string, WholesalePrice[]> = {
  "empanadas": [
    { quantity: 25, pricePerUnit: 2500 },
    { quantity: 50, pricePerUnit: 2250 },
    { quantity: 100, pricePerUnit: 2000 },
    { quantity: 200, pricePerUnit: 1850 }
  ],
  "pasteles": [
    { quantity: 25, pricePerUnit: 2800 },
    { quantity: 50, pricePerUnit: 2500 },
    { quantity: 100, pricePerUnit: 2200 },
    { quantity: 200, pricePerUnit: 2000 }
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