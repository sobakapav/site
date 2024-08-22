import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const textBlock = () => z.array(
  z.object({
    type: z.string().optional(),
    text: z.string().optional(),
    list: z.array(z.string()).optional(),
  })
).optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    thumbnail: z.string().optional(),
    imageName: z.string().optional(),
    topic: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    seeMore: z.string().optional(),
    
    relatedLinks: z.object({
      title: z.string().optional(),
      links: z.array(z.string()).optional(),
    }).optional(),

    metadata: metadataDefinition(),
  }),
});

const portfolioCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    publishYear: z.number().optional(), 
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    topic: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    
    external: z.boolean().optional(),
    externalLink: z.string().optional(),
    
    thumbnail: z.object({
      src: z.string(),
      alt: z.string().optional(),
    }).optional(),
    
    result: z.array(z.object({
      src: z.string().optional(),
      text: z.string(),
      link: z.string().optional(),
    })).optional(),

    metadata: metadataDefinition(),
  }),
});

const serviceCollection = defineCollection({
  schema: z.object({

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string(),
    imageAlt: z.string().optional(),
    thumbnail: z.string().optional(),
    images: z.object({
      imageMain: z.object({
        urlLarge: z.string(), 
        urlSmall: z.string(), 
        alt: z.string(), 
      }),
      imageMap: z.object({
        url: z.string(),
        alt: z.string(),
      }),
    }),
    blueBlockText: textBlock(),
    results: z.array(z.object({
      title: z.string().optional(),
      text: z.string().optional(),
      image: z.string().optional(),
      alt: z.string().optional(),
    })),
    works: z.array(z.object({
      link: z.string().optional(),
      text: z.string().optional(),
      image: z.string().optional(),
      alt: z.string().optional(),
    })).optional(),
    team: z.number().optional(),
    mapBlock: z.array(z.object({
       type: z.string().optional(),
       text: z.string().optional(),
    })),
    comments: textBlock(),
    budget: z.object({
      price: textBlock(),
      time: textBlock(),
    }),
    roi: textBlock().optional(),
    otherServices: z.array(z.object({
      title: z.string().optional(),
      link: z.string().optional(),
      text: z.string().optional(),
    })).optional(),
    story: textBlock().optional(),
    pain: z.string().optional(),
//    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  services: serviceCollection,
  research: postCollection,
  design2dev: postCollection,
  portfolio: portfolioCollection,
};
