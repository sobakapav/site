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

const marketTags = portfolioFilters['Отрасли'];
console.log(JSON.stringify(markets));

const portfolio = await getCollection('portfolio');
const portfolioItems = portfolio.filter(item => !filteredOut.includes(item.slug));

const clients = {};

for (const item of portfolioItems) {
  if (item.data.client) {
    const logo = item.data.client.src?.substring('~/assets/images/portfolio/'.length);
    const code = item.data.client.code
      || item.data.tags?.find(x => clientCodes.includes(x))
      || slugify(item.data.client.alt, {replace: {'.': '-'}});
    
    const record = {
      id: item.data.client.uuid,
      key: code,
      title: item.data.client.alt,
      logo: logo ? `https://sobakapav.ru/images/portfolio/${logo}` : '',
      link: item.data.client.link,
      markets: item.data.tags.filter(tag => marketTags.hasOwnProperty(tag)).map(tag => marketIds[tag]),
      isPrivate: false,
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
