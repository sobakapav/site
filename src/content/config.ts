import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

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

const postSchema = () => z.object({
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
   
   relatedPages: relatedLinks(),
   relatedPages2: relatedLinks(),

   metadata: metadataDefinition(),
});

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: postSchema(),
});

const researchCollection = defineCollection({
  schema: postSchema(),
});

const design2devCollection = defineCollection({
  schema: postSchema(),
});

const cheatsheetSchema = () => z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  alias: z.array(z.string()),
  section: z.string().optional(),
  tags: z.array(z.object({
    tag: z.string().optional(),
  })),
  focuses: z.array(z.object({
    title: z.string().optional(),
    text: z.string().optional(),
  })),
  advices: z.array(z.object({
    title: z.string().optional(),
    text: z.string().optional(),
  })),
  cases: z.array(z.object({
    title: z.string().optional(),
    text: z.string().optional(),
  })),
  goodExample: z.object({
    text: z.string().optional(),
    link: z.string().optional(),
    linktext: z.string().optional(),
  }),
  badExample: z.object({
    text: z.string().optional(),
    link: z.string().optional(),
    linktext: z.string().optional(),
  }),
  instruments: z.array(z.object({
    title: z.string().optional(),
    text: z.string().optional(),
    img: z.string().optional(),
    link: z.string().optional(),
  })),
  director: z.object({
    text: z.string().optional(),
    person: z.string().optional(),
  }),
});

const cheatsheetCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/content/cheatsheets' }),
  schema: cheatsheetSchema(),
});

const portfolioSchema = () => z.object({
  publishDate: z.date().optional(),
  publishYear: z.number().optional(), 
  updateDate: z.date().optional(),
  draft: z.boolean().optional(),
  doubleSize: z.boolean().optional(),
  noCard: z.boolean().optional(),

  name: z.string().optional(),
  title: z.string(),
  titleBrief: z.string().optional(),
  excerpt: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),

  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  awards: z.array(z.string()).optional(),
  isNew: z.boolean().optional(),
  
  external: z.boolean().optional(),
  externalLink: z.string().optional(),
  
  logo: z.object({
    src: z.string(),
    link: z.string().optional(),
    alt: z.string().optional(),
  }).optional(),
      
  thumbnail: z.object({
    src: z.string(),
    src2: z.string().optional(),
    src3: z.string().optional(),
    alt: z.string().optional(),
    isDark: z.boolean().optional(),
  }).optional(),
  
  result: z.array(z.object({
    src: z.string().optional(),
    text: z.string().optional(),
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
  
  review2: z.object({
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
});

const portfolioCollection = defineCollection({
  schema: portfolioSchema(),
});

const portfolioRawCollection = defineCollection({
  schema: portfolioSchema(),
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/portfolio' }),
});

const promoCollection = defineCollection({
  schema: portfolioSchema(),
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
      isSpecial: z.boolean().optional(),
      title: z.string().optional(),
      text: z.string().optional(),
      img: z.string().optional(),
      link: z.string().optional(),
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
      imgPosition: z.string().optional(),
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
        details: z.string().optional(),
      }))
    }).optional(),
    tools: z.array(z.object({
      isDefault: z.boolean().optional(),
      title: z.string().optional(),
      link: z.string().optional(),
      image: z.string().optional(),
    })).optional(),

    metadata: metadataDefinition(),
  }),
});

const currentProjectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  }),
});

const videoSchema = () => z.object({
   publishDate: z.date(),
   title: z.string(),
   description: z.string().optional(),
   excerpt: z.string().optional(),
   videoId: z.string().optional(),
 });
 
 const videoCollection = defineCollection({
  schema: videoSchema(),
 });

const bookSchema = () => z.object({
   publishDate: z.string().optional(),
   updateDate: z.date().optional(),

   title: z.string(),
   excerpt: z.string().optional(),
   description: z.string().optional(),
   image: z.string().optional(),
   imageAlt: z.string().optional(),
   author: z.string().optional(),
});

const bookCollection = defineCollection({
  schema: bookSchema(),
});

const personSchema = () => z.object({
  year: z.number(),
  name: z.string(),
  excerpt: z.string(),
  context: z.string(),
  image: z.string(),
  relatedPages: z.array(z.object({
    text: z.string().optional(),
    collection: z.string().optional(),
    page: z.string().optional(),
  })).optional(),
  review: z.string().optional(),
});

const personCollection = defineCollection({
  schema: personSchema(),
});

export const collections = {
  post: postCollection,
  services: serviceCollection,
  research: researchCollection,
  design2dev: design2devCollection,
  portfolio: portfolioCollection,
  portfolioRaw: portfolioRawCollection,
  currentProjects: currentProjectsCollection,
  promo: promoCollection,
  video: videoCollection,
  cheatsheets: cheatsheetCollection,
  books: bookCollection,
  person: personCollection,
};

