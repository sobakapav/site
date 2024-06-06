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
          href: getPermalink('/services/iu-redesign'),
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
