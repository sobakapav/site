import { folders } from '~/navigation';

export const GET = () => {
  return new Response(JSON.stringify(folders), {
    headers: { 'content-type': 'application/json' },
  });
};
