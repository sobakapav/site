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

const relatedLinks = () => z.array(z.object({
  text: z.string().optional(),
  collection: z.string().optional(),
  page: z.string().optional(),
})).optional();

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
    doubleSize: z.boolean().optional(),
    noCard: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    
    external: z.boolean().optional(),
    externalLink: z.string().optional(),
    
    thumbnail: z.object({
      src: z.string(),
      src2: z.string().optional(),
      alt: z.string().optional(),
      isDark: z.boolean().optional(),
    }).optional(),
    
    result: z.array(z.object({
      src: z.string().optional(),
      text: z.string(),
      link: z.string().optional(),
    })).optional(),
    
    relatedLinks: z.object({
          title: z.string().optional(),
          links: z.array(z.string()).optional(),
    }).optional(),
   
    relatedPages: relatedLinks(),
    relatedPages2: relatedLinks(),
    
    context: z.string().optional(),
    budget: z.string().optional(),
    time: z.string().optional(),
    director: z.string().optional(),
    
    review: z.object({
      text: z.string().optional(),
      photo: z.string().optional(),
      person: z.string().optional(),
      position: z.string().optional(),
    }).optional(),
    
    outcome: z.object({
      title: z.string(),
      text1: z.string().optional(),
      text2: z.string().optional(),
      numbers: z.array(z.object({
        title: z.string().optional(),
        number: z.string().optional(),
        text: z.string().optional(),
      })).optional()
    }).optional(),

    metadata: metadataDefinition(),
  }),
});

const serviceCollection = defineCollection({
  schema: z.object({

    title: z.string(),
    hyphenateTitle: z.boolean().optional(),
    doubleSize: z.boolean().optional(),
    excerpt: z.string().optional(),
    image: z.string(),
    image2: z.string().optional(),
    imageAlt: z.string().optional(),
    thumbnail: z.string().optional(),
    thumbnail2: z.string().optional(),
    extra: z.string().optional(),
    results: z.array(z.object({
      title: z.string().optional(),
      text: z.string().optional(),
      image: z.string().optional(),
      alt: z.string().optional(),
    })),
    relatedLinks: z.object({
      title: z.string(),
    }),
    works: z.array(z.object({
      name: z.string().optional(),
      text: z.string().optional(),
    })).optional(),
    team: z.number().optional(),
    mapBlock: z.object({
      title: z.string(),
      columns: z.number().optional(),
      items: z.array(z.object({
        title: z.string(),
        time: z.string().optional(),
        text: z.string().optional(),
      }))
    }).optional(),
    comments: z.array(z.object({
      title: z.string().optional(),
      text: z.string().optional(),
      img: z.string().optional(),
      alt: z.string().optional(),
    })),
    budget: z.object({
      price: z.object({
        title: z.string(),
        text: z.string(),
        title2: z.string().optional(),
        text2: z.string().optional(),
        comment: z.string().optional(),
      }),
      time: z.object({
        title: z.string(),
        text: z.string(),
      })
    }),
    roi: z.string().optional(),
    otherServices: z.array(z.object({
      title: z.string().optional(),
      link: z.string().optional(),
      text: z.string().optional(),
    })).optional(),
    story: textBlock().optional(),
    pain: z.string().optional(),
//    metadata: metadataDefinition(),
    notThisService: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        text: z.string().optional(),
      }))
    }).optional(),
    when: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        text: z.string().optional(),
      }))
    }).optional(),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  services: serviceCollection,
  research: postCollection,
  design2dev: postCollection,
  portfolio: portfolioCollection,
};
