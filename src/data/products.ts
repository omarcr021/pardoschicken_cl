import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: '1 Pardos Brasa',
    description: '1 Pollo a la Brasa dorado y jugoso, acompañado de crocantes papas fritas Pardos y ensalada fresca o cocida a elección.',
    price: 92.50,
    originalPrice: 99.90,
    image: 'https://api.pardoschicken.pe/images/resource/categories/a98d671f-cf7b-47b2-be60-e519db0e3f94?width=1000&height=1000',
    category: 'Pardos Brasa',
    categorySlug: 'pardos-brasa',
    serves: '4 personas',
    isPopular: true
  },
  {
    id: 'prod-2',
    name: '1/2 Pardos Brasa',
    description: '1/2 Pollo a la Brasa con su piel crocante y sazón tradicional, papas fritas familiares y ensalada fresca con vinagreta de la casa.',
    price: 52.90,
    image: 'https://api.pardoschicken.pe/images/resource/categories/a98d671f-cf7b-47b2-be60-e519db0e3f94?width=1000&height=1000',
    category: 'Pardos Brasa',
    categorySlug: 'pardos-brasa',
    serves: '2 personas',
    isPopular: true
  },
  {
    id: 'prod-3',
    name: '1/4 Pardos Brasa',
    description: '1/4 de Pollo a la Brasa (pecho o pierna según tu elección), acompañado de papas fritas y ensalada fresca individual.',
    price: 29.90,
    image: 'https://api.pardoschicken.pe/images/resource/categories/a98d671f-cf7b-47b2-be60-e519db0e3f94?width=1000&height=1000',
    category: 'Pardos Brasa',
    categorySlug: 'pardos-brasa',
    serves: '1 persona'
  },
  {
    id: 'prod-4',
    name: 'Promoción Para 2',
    description: '1/2 Pardos Brasa + Papas Fritas + Ensalada Regular + 2 Bebidas de 500ml (Chicha Morada o gaseosa).',
    price: 67.90,
    originalPrice: 75.00,
    image: 'https://api.pardoschicken.pe/images/resource/categories/25cc19d8-9437-4b8c-ba7c-aa20bb35065a?width=1000&height=1000',
    category: 'Promociones',
    categorySlug: 'promociones',
    serves: '2 personas',
    isPopular: true
  },
  {
    id: 'prod-5',
    name: 'Sánguche Brioche Pardos Clásico',
    description: 'Generosa porción de pollo a la brasa deshilachado con lechuga fresca, tomate y mayonesa artesanal en suave pan brioche.',
    price: 24.90,
    image: 'https://api.pardoschicken.pe/images/resource/categories/1299c8d0-440d-11f1-908b-f1f7a6e69a4e?width=1000&height=1000',
    category: 'Sánguches',
    categorySlug: 'sanguches',
    isNew: true
  },
  {
    id: 'prod-6',
    name: 'Anticuchos de Corazón (2 Palos)',
    description: 'Tiernos trozos de corazón de res macerados con ají panca y especias a la parrilla, servidos con papa dorada y choclo tierno.',
    price: 34.50,
    image: 'https://api.pardoschicken.pe/images/resource/categories/e427934d-efd1-4c1f-8a32-29de491bb665?width=1000&height=1000',
    category: 'Anticuchos y Mollejitas',
    categorySlug: 'anticuchos-y-mollejitas',
    isPopular: true
  },
  {
    id: 'prod-7',
    name: 'Mollejitas a la Parrilla',
    description: 'Crocantes y jugosas mollejitas de pollo cocidas a la parrilla con aderezo parrillero, acompañadas de papa dorada.',
    price: 31.90,
    image: 'https://api.pardoschicken.pe/images/resource/categories/e427934d-efd1-4c1f-8a32-29de491bb665?width=1000&height=1000',
    category: 'Anticuchos y Mollejitas',
    categorySlug: 'anticuchos-y-mollejitas'
  },
  {
    id: 'prod-8',
    name: 'Chicharrón de Pollo Pardos',
    description: 'Crocantes bocados de pechuga de pollo marinados al estilo Pardos, acompañados de papas fritas y salsas de la casa.',
    price: 38.00,
    image: 'https://api.pardoschicken.pe/images/resource/categories/d80a73c9-97d8-4dd4-92e3-ae6671e0603e?width=1000&height=1000',
    category: 'Chicharrones',
    categorySlug: 'chicharrones'
  },
  {
    id: 'prod-9',
    name: 'Ensalada Pardos Delicia',
    description: 'Mix de lechugas frescas, palta cremosa, tomate, choclo tierno, huevo duro, queso fresco y la legendaria vinagreta Pardos.',
    price: 26.50,
    image: 'https://api.pardoschicken.pe/images/resource/categories/a4c2e72e-e2f3-431f-a6cf-7be1443ae297?width=1000&height=1000',
    category: 'Ensaladas',
    categorySlug: 'ensaladas'
  },
  {
    id: 'prod-10',
    name: 'Chicha Morada Tradicional 1.5 Lt',
    description: 'Elaborada diariamente con maíz morado peruano, piña, manzana, canela, clavo de olor y un toque de limón.',
    price: 18.00,
    image: 'https://api.pardoschicken.pe/images/resource/categories/1db3a170-8a61-11f0-8f75-c3ba91b0d470?width=1000&height=1000',
    category: 'Bebidas',
    categorySlug: 'bebidas',
    isPopular: true
  },
  {
    id: 'prod-11',
    name: 'Crema Volteada Casera',
    description: 'Suave flan acaramelado horneado lentamente según la receta tradicional limeña.',
    price: 14.50,
    image: 'https://api.pardoschicken.pe/images/resource/categories/f18d310b-56c7-4c4b-b4d5-0949d6f1d623?width=1000&height=1000',
    category: 'Postres',
    categorySlug: 'postres'
  },
  {
    id: 'prod-12',
    name: 'Porción Familiar de Papas Pardos',
    description: 'Papas fritas en corte grueso, doradas y sazonadas con el toque especial Pardos.',
    price: 16.90,
    image: 'https://api.pardoschicken.pe/images/resource/categories/04b2d0bf-02a4-401d-992a-1aac9be1faee?width=1000&height=1000',
    category: 'Guarniciones',
    categorySlug: 'guarniciones'
  }
];

export const LIMA_DISTRICTS = [
  'Miraflores',
  'San Isidro',
  'Santiago de Surco',
  'San Borja',
  'La Molina',
  'Magdalena del Mar',
  'Jesús María',
  'Lince',
  'Pueblo Libre',
  'San Miguel',
  'Barranco',
  'Surquillo',
  'Lima Cercado',
  'Los Olivos',
  'Chorrillos',
  'Bellavista (Callao)',
  'La Perla (Callao)'
];
