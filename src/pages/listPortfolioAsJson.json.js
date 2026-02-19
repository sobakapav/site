import Layout from '~/layouts/Layout.astro';
import { portfolioFilters } from '~/navigation';

import { getCollection } from 'astro:content';

const filteredOut = ['aquaphor', 'broker', 'compel-password', 'documedd', 'easybuy', 'ecom', 'erna', 'faberlic-2', 'g-mini', 'just-info', 'justfa', 'loglab', 'online-express', 'positive-tech', 'presentstar', 'simplefly', 'space307', 'torba', 'valer-ai', 'x5', 'x5-paket'];

const services = portfolioFilters['Услуги'];
const portfolio = await getCollection('portfolio');

const portfolioItems = portfolio.filter(item => !filteredOut.includes(item.slug)).map(item => {
  const itemImage = (item.data.thumbnail.src2 ? item.data.thumbnail.src2 : item.data.thumbnail.src)?.substring('~/assets/images/portfolio/'.length);
  
  return {
    name: item.slug,
    year: item.data.publishYear,
    title: item.data.title,
    client: item.data.logo.alt,
    services: item.data.tags.filter(tag => services[tag]),
    image: itemImage ? `https://sobakapav.ru/images/portfolio/${itemImage}` : '',
  }
});

export const GET = () => {
  return new Response(JSON.stringify(portfolioItems), {
    headers: { 'content-type': 'application/json' },
  });
};
