import * as Prismic from '@prismicio/client';

export const client = Prismic.createClient('ativartec', {
    accessToken: `${import.meta.env.VITE_PRISMIC_TOKEN}`,
});