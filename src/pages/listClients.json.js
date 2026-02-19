import Layout from '~/layouts/Layout.astro';
import { portfolioFilters } from '~/navigation';
import { slugify } from 'transliteration';

import { getCollection } from 'astro:content';

const filteredOut = ['aquaphor', 'broker', 'compel-password', 'documedd', 'easybuy', 'ecom', 'erna', 'faberlic-2', 'g-mini', 'just-info', 'justfa', 'loglab', 'online-express', 'positive-tech', 'presentstar', 'simplefly', 'space307', 'torba', 'valer-ai', 'x5', 'x5-paket'];

const clientCodes = Object.keys(portfolioFilters['hidden']).filter( x => (
  isNaN(parseInt(x)) &&
  'constructor' !== x &&
  'cjm' !== x &&
  'kids' !== x
));

const markets = portfolioFilters['Отрасли'];
console.log(JSON.stringify(markets));

const portfolio = await getCollection('portfolio');
const portfolioItems = portfolio.filter(item => !filteredOut.includes(item.slug));

const clients = {};

for (const item of portfolioItems) {
  if (item.data.logo) {
    const logo = item.data.logo?.src?.substring('~/assets/images/portfolio/'.length);
    const code = item.data.logo.code
      || item.data.tags?.find(x => clientCodes.includes(x))
      || slugify(item.data.logo.alt, {replace: {'.': '-'}});
    
    const record = {
      code,
      name: item.data.logo.alt,
      logo: logo ? `https://sobakapav.ru/images/portfolio/${logo}` : '',
      link: item.data.logo.link,
      market: item.data.tags.filter(tag => markets.hasOwnProperty(tag))
    }
    
    clients[code || logo] = record;
  }
}

const response = Object.values(clients);

export const GET = () => {
  return new Response(JSON.stringify(response), {
    headers: { 'content-type': 'application/json' },
  });
};
