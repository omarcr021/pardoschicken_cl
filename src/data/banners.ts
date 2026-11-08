import type { HeroBanner } from '../types';

export const HERO_BANNERS: HeroBanner[] = [
  {
    id: 'banner-1',
    title: 'Sánguches Brioche Brasa',
    subtitle: 'El inconfundible sabor Pardos en suave pan brioche artesanal',
    desktopImage: 'https://pardos.s3.amazonaws.com/2026/04/Banner_WEb_brioche_brasa.webp',
    mobileImage: 'https://pardos.s3.amazonaws.com/2026/04/Banner_WEb_brioche_brasa.webp',
    targetUrl: '#sanguches',
    ctaText: 'Pídelo Aquí'
  },
  {
    id: 'banner-2',
    title: 'Polos Pardos x Jorge Salinas',
    subtitle: 'Edición limitada con orgullo peruano',
    desktopImage: 'https://pardos.s3.us-east-1.amazonaws.com/2026/09/Banner-desktop---PARDOS---JORGE-SALINAS.jpg',
    mobileImage: 'https://pardos.s3.us-east-1.amazonaws.com/2026/09/Banner-Mobile---PARDOS---JORGE-SALINAS.jpg',
    targetUrl: '#promociones',
    ctaText: 'Conoce Más'
  },
  {
    id: 'banner-3',
    title: 'Promoción Para 2',
    subtitle: '1/2 Pardos Brasa + Papas + Ensalada + 2 Bebidas para compartir',
    desktopImage: 'https://pardoschicken.s3.us-east-1.amazonaws.com/2026/06/banner_desktop_para_2.jpeg',
    mobileImage: 'https://pardoschicken.s3.us-east-1.amazonaws.com/2026/06/banner_movil_para_2.jpeg',
    targetUrl: '#promociones',
    ctaText: 'Ver Promoción'
  },
  {
    id: 'banner-4',
    title: 'Promoción Tu Chicha 1.5 Lt',
    subtitle: 'Acompaña tu brasa con nuestra chicha morada tradicional heladita',
    desktopImage: 'https://s3.us-east-1.amazonaws.com/pardoschicken/2025/banners/banner-home.jpg',
    mobileImage: 'https://s3.us-east-1.amazonaws.com/pardoschicken/2025/banners/banner-home-mobile.jpg',
    targetUrl: '#promociones',
    ctaText: 'Pedir Ahora'
  }
];
