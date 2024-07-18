import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Портфолио',
      href: '#',
    },
    {
      text: 'Услуги',
      links: [
        {
          text: 'UX/UI-дизайн под ключ',
          href: getPermalink('/services/turnkey'),
        },
        {
          text: 'Прототип под инвестицию',
          href: getPermalink('/services/prototype'),
        },
        {
          text: 'UI-редизайн',
          href: getPermalink('/services/ui-redesign'),
        },
        {
          text: 'Точечный редизайн интерфейса',
          href: getPermalink('/services/spot-redesign'),
        },
        {
          text: 'Добавление новых возможностей',
          href: getPermalink('/services/new-features'),
        },
        {
          text: 'UX-аудит',
          href: getPermalink('/services/ux-audit'),
        },
        {
          text: 'Продуктовое исследование',
          href: getPermalink('/services/research'),
        },  
        {
          text: 'Усиление команды разработки',
          href: getPermalink('/services/dev-team'),
        },
        {
          text: 'Работа в продуктовой команде',
          href: getPermalink('/services/product-team'),
        },
        {
          text: 'Консультации',
          href: getPermalink('/services/consultation'),
        },
        {
          text: 'Контент-дизайн',
          href: getPermalink('/services/content-design'),
        },
      ],
    },

    {
      text: 'Отрасли',
      href: '#',
    },

    {
      text: 'Экспертиза',
      links: [
        {
          text: 'Статьи',
          href: getPermalink('/blog'),
        },
        {
          text: 'UX-исследования',
          href: getPermalink('/ux-research'),
        }, 
        {
          text: 'Передача макетов в разработку',
          href: getPermalink('/features'),
        },
        {
          text: '100 шпаргалок по дизайну интерфейсов',
          href: "https://sobakapav.ru/cheatsheets",
        },    
        {
          text: 'Книги',
          href: "https://sobakapav.ru/publications/books",
        },
        {
          text: 'Email-рассылка',
          href: "https://sobakapav.ru/newsletter",
        },
       ],
    },

    {
      text: 'О нас',
      links: [
        {
          text: 'О нас',
          href: "https://sobakapav.ru/about",
        },
        {
          text: 'Вакансии',
          href: "https://sobakapav.ru/vacancy",
        },
        {
          text: 'Выпускники',
          href: "https://sobakapav.ru/graduates",
        },
        {
          text: 'Соцсети',
          href: "https://sobakapav.ru/social-network",
        },
        {
          text: 'Контакты',
          href: "https://sobakapav.ru/contacts",
        },
       ],
    },  
    {
      text: 'Дизайн-задачник',
      href: "https://www.eduhund.ru",
    },
      
  ],

};

export const footerData = {
  links: [
    {
      title: 'Услуги',
      links: [
        {
          text: 'UX/UI-дизайн под ключ',
          href: getPermalink('/services/turnkey'),
        },
        {
          text: 'Прототип под инвестицию',
          href: getPermalink('/services/prototype'),
        },
        {
          text: 'UI-редизайн',
          href: getPermalink('/services/ui-redesign'),
        },
        {
          text: 'Точечный редизайн интерфейса',
          href: getPermalink('/services/spot-redesign'),
        },
        {
          text: 'Добавление новых возможностей',
          href: getPermalink('/services/new-features'),
        },
        {
          text: 'UX-аудит',
          href: getPermalink('/services/ux-audit'),
        }
      ],
    },
    {
          title: ' ',
          links: [
            {
              text: 'Продуктовое исследование',
              href: getPermalink('/services/research'),
            },  
            {
              text: 'Усиление команды разработки',
              href: getPermalink('/services/dev-team'),
            },
            {
              text: 'Работа в продуктовой команде',
              href: getPermalink('/services/product-team'),
            },
            {
              text: 'Консультации',
              href: getPermalink('/services/consultation'),
            },
            {
              text: 'Контент-дизайн',
              href: getPermalink('/services/content-design'),
            },
          ],
        },
    {
      title: 'Экспертиза',
      links: [
        {
          text: 'Статьи',
          href: getPermalink('/blog'),
        },
        {
          text: 'UX-исследования',
          href: getPermalink('/ux-research'),
        }, 
        {
          text: 'Передача макетов в разработку',
          href: getPermalink('/features'),
        },
        {
          text: '100 шпаргалок по дизайну интерфейсов',
          href: 'https://sobakapav.ru/cheatsheets',
        },    
        {
          text: 'Книги',
          href: 'https://sobakapav.ru/publications/books',
        },
        {
          text: 'Email-рассылка',
          href: 'https://sobakapav.ru/newsletter',
        },
     ],     
    },
    {
      title: 'О нас',
      links: [
        { text: 'О нас', href: 'https://sobakapav.ru/about' },
        { text: 'Вакансии', href: 'https://sobakapav.ru/vacancy' },
        { text: 'Выпускники', href: 'https://sobakapav.ru/graduates' },
        { text: 'Соцсети', href: 'https://sobakapav.ru/social-network' },
        { text: 'Контакты', href: 'https://sobakapav.ru/contacts' },
        { text: 'Дизайн-задачник', href: 'https://www.eduhund.ru' },         
      ],
    },
  ],
  
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/sobakawow' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/playlist?list=PLimfCvKK4fIqcTuyyCsFMwQxOFXxAah1H&disable_polymer=true' },
    { ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: 'https://www.behance.net/sobakapavlova' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sobakapav' },
  ],
  
};
