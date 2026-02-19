import Layout from '~/layouts/Layout.astro';
import { portfolioFilters } from '~/navigation';

import { getCollection } from 'astro:content';

const filteredOut = ['aquaphor', 'broker', 'compel-password', 'documedd', 'easybuy', 'ecom', 'erna', 'faberlic-2', 'g-mini', 'just-info', 'justfa', 'loglab', 'online-express', 'positive-tech', 'presentstar', 'simplefly', 'space307', 'torba', 'valer-ai', 'x5', 'x5-paket'];

const clientCodes = Object.keys(portfolioFilters['hidden']).filter( x => (
  isNaN(parseInt(x)) &&
  'constructor' !== x &&
  'cjm' !== x &&
  'kids' !== x
));

const services = portfolioFilters['Услуги'];
const markets = portfolioFilters['Отрасли'];
const portfolio = await getCollection('portfolio');

const portfolioItems = portfolio.filter(item => !filteredOut.includes(item.slug)).map(item => {
  const itemImage = (item.data.thumbnail.src2 ? item.data.thumbnail.src2 : item.data.thumbnail.src)?.substring('~/assets/images/portfolio/'.length);
  const code = item.data.logo.code
    || item.data.tags?.find(x => clientCodes.includes(x))
    || slugify(item.data.logo.alt, {replace: {'.': '-'}});
      
  return {
    name: item.slug,
    year: item.data.publishYear,
    title: item.data.title,
    client: code || item.data.logo.alt,
    services: item.data.tags.filter(tag => services.hasOwnProperty(tag)),
    market: item.data.tags.filter(tag => markets.hasOwnProperty(tag)),
    image: itemImage ? `https://sobakapav.ru/images/portfolio/${itemImage}` : '',
  }
});

export const GET = () => {
  return new Response(JSON.stringify(portfolioItems), {
    headers: { 'content-type': 'application/json' },
  });
};
