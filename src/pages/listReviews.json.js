import Layout from '~/layouts/Layout.astro';

import { getCollection } from 'astro:content';

const filteredOut = ['aquaphor', 'broker', 'compel-password', 'documedd', 'easybuy', 'ecom', 'erna', 'faberlic-2', 'g-mini', 'just-info', 'justfa', 'loglab', 'online-express', 'positive-tech', 'presentstar', 'simplefly', 'space307', 'torba', 'valer-ai', 'x5', 'x5-paket'];

const portfolio = await getCollection('portfolio');

const reviews = {};

const addReviewObject = (portfolio, review, idx) => {
  reviews[review.uuid] = {
    id: review.uuid,
    key: portfolio.slug + '-review' + ((idx && idx !== 1) ? ('-' + idx) : ''),
    portfolioId: portfolio.data.uuid,
    title: portfolio.data.title,
    clientId: portfolio.data.client.uuid,
    text: review.text,
    person: review.person,
    position: review.position,
    isPrivate: false, 
  }
}

const portfolioFiltered = portfolio.filter(item => !filteredOut.includes(item.slug));

for (const portfolioItem of portfolioFiltered) {
  if (portfolioItem.data.review) {
    addReviewObject(portfolioItem, portfolioItem.data.review, 1);
  }
  if (portfolioItem.data.review2) {
    addReviewObject(portfolioItem, portfolioItem.data.review2, 2);
  }
}

export const GET = () => {
  return new Response(JSON.stringify(Object.values(reviews)), {
    headers: { 'content-type': 'application/json' },
  });
};
