import { portfolioFilters } from '~/navigation';
const markets = portfolioFilters['Отрасли'];

const result = [];

for (var key in markets) {
  result.push({id: key, title: markets[key]});
}

export const GET = () => {
  return new Response(JSON.stringify(result), {
    headers: { 'content-type': 'application/json' },
  });
};
