import { portfolioFilters } from '~/navigation';
const markets = portfolioFilters['Отрасли'];

export const GET = () => {
  return new Response(JSON.stringify(markets), {
    headers: { 'content-type': 'application/json' },
  });
};
