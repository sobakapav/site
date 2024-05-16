import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Портфолио',
      href: '#',
    },

    {
      text: 'Услуги',
      href: '#',
    },

    {
      text: 'Отрасли',
      href: '#',
    },

    {
      text: 'Экспертиза',
      links: [
        {
          text: 'Передача макетов в разработку',
          href: getPermalink('/#features'),
        },
        {
          text: '100 шпаргалок по дизайну интерфейсов',
          href: getPermalink('/services'),
        },
        {
          text: 'Статьи',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Книги',
          href: getPermalink('/about'),
        },
        {
          text: 'Email-рассылка',
          href: getPermalink('/contact'),
        },
       ],
    },

    {
      text: 'О нас',
      links: [
        {
          text: 'О нас',
          href: getPermalink('/#features'),
        },
        {
          text: 'Вакансии',
          href: getPermalink('/services'),
        },
        {
          text: 'Выпускники',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Соцсети',
          href: getPermalink('/#society'),
        },
        {
          text: 'Контакты',
          href: '#',
        },
       ],
    },
    
    
    
    {
      text: 'Дизайн-задачник',
      href: '#',
    },
      
  ],

};

export const footerData = {
  links: [
    {
      title: 'Портфолио',
    },
    {
      title: 'Услуги',
    },
    {
      title: 'Отрасли',      
    },
    {
      title: 'О нас',
      links: [
        { text: 'О нас', href: '#' },
        { text: 'Вакансии', href: '#' },
        { text: 'Выпускники', href: '#' },       
      ],
    },
  ],
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  
};
