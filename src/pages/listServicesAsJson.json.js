import Layout from '~/layouts/Layout.astro';
import { portfolioFilters } from '~/navigation';

import { getCollection } from 'astro:content';

const filteredOut = ['consultation', 'dev-team'];

const services = await getCollection('services');

const servicesItems = services.filter(item => !filteredOut.includes(item.slug)).map(item => {
  var itemImage = item.data.thumbnail;
  if (itemImage) {
    itemImage = itemImage.substring('~/assets/images/services/'.length);
  }
  
  return {
    name: item.slug,
    title: item.data.title,
    services: item.data.folder.name,
    image: itemImage ? `https://sobakapav.ru/images/services/${itemImage}` : ''
  }
});

export const GET = () => {
  return new Response(JSON.stringify(servicesItems), {
    headers: { 'content-type': 'application/json' },
  });
};
