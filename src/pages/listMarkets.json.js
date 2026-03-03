import { portfolioFilters } from '~/navigation';
import { getCollection } from 'astro:content';

const markets = await getCollection('industries');

const result = markets.map(market => ({id: market.data.uuid, key: market.data.key, title: market.data.title, isPublic: true}));

export const GET = () => {
  return new Response(JSON.stringify(result), {
    headers: { 'content-type': 'application/json' },
  });
};
