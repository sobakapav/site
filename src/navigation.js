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
          href: getPermalink('/turnkey'),
        },
        {
          text: 'Прототип под инвестицию',
          href: getPermalink('/prototype'),
        },
        {
          text: 'UI-редизайн',
          href: getPermalink('/iu-redesign'),
        },
        {
          text: 'Точечный редизайн интерфейса',
          href: getPermalink('/spot-redesign'),
        },
        {
          text: 'Добавление новых возможностей',
          href: getPermalink('/new-features'),
        },
        {
          text: 'UX-аудит',
          href: getPermalink('/ux-audit'),
        },
        {
          text: 'Продуктовое исследование',
          href: getPermalink('/research'),
        },  
        {
          text: 'Усиление команды разработки',
          href: getPermalink('/dev-team'),
        },
        {
          text: 'Работа в продуктовой команде',
          href: getPermalink('/product-team'),
        },
        {
          text: 'Консультации',
          href: getPermalink('/consultation'),
        },
        {
          text: 'Контент-дизайн',
          href: getPermalink('/content-design'),
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
