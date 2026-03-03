import Layout from '~/layouts/Layout.astro';
import { portfolioFilters } from '~/navigation';
import { slugify } from 'transliteration';

import { getCollection } from 'astro:content';

const markets = await getCollection('industries');

const marketIds = {};
for (const market of markets) {
  marketIds[market.data.key] = market.data.uuid;
}

const filteredOut = ['aquaphor', 'broker', 'compel-password', 'documedd', 'easybuy', 'ecom', 'erna', 'faberlic-2', 'g-mini', 'just-info', 'justfa', 'loglab', 'online-express', 'positive-tech', 'presentstar', 'simplefly', 'space307', 'torba', 'valer-ai', 'x5', 'x5-paket'];

const clientCodes = Object.keys(portfolioFilters['hidden']).filter( x => (
  isNaN(parseInt(x)) &&
  'constructor' !== x &&
  'cjm' !== x &&
  'kids' !== x
));

const serviceTags = portfolioFilters['Услуги'];
const marketTags = portfolioFilters['Отрасли'];
const portfolio = await getCollection('portfolio');
const services = await getCollection('services');

const serviceIds = {};

for (var service of services) {
  serviceIds[service.slug] = service.data.uuid;
}

const portfolioItems = portfolio.filter(item => !filteredOut.includes(item.slug)).map(item => {
  const itemImage = (item.data.thumbnail.src2 ? item.data.thumbnail.src2 : item.data.thumbnail.src)?.substring('~/assets/images/portfolio/'.length);
      
  return {
    id: item.data.uuid,
    key: item.slug,
    year: item.data.publishYear,
    title: item.data.title,
    clientId: item.data.client.uuid,
    services: item.data.tags.filter(tag => serviceTags.hasOwnProperty(tag)).map(tag => serviceIds[tag]),
    markets: item.data.tags.filter(tag => marketTags.hasOwnProperty(tag)).map(tag => marketIds[tag]),
    image: itemImage ? `https://sobakapav.ru/images/portfolio/${itemImage}` : '',
    isPrivate: false,
  }
});

export const GET = () => {
  return new Response(JSON.stringify(portfolioItems), {
    headers: { 'content-type': 'application/json' },
  });
};
