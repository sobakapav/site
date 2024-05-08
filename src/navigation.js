import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Портфолио',
      links: [
        {
          text: 'Обычные кейсы',
          href: getPermalink('/#cases'),
        },
        {
          text: 'Микрокейсы',
          href: getPermalink('/#microcases'),
        },       
      ],
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
      text: 'О компании',
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
        
       ],
    },
    
    {
      text: 'Контакты',
      href: '#',
    },
    {
      text: 'Работа у нас',
      links: [
        {
          text: 'Вакансии',
          href: getPermalink('#vacancy'),
        },
        {
          text: 'Выпускники',
          href: getPermalink('#graduates'),
        },       
      ],
    },
    {
      text: 'Соцсети',
      links: [
        {
          text: 'Все соцсети',
          href: getPermalink('/#society'),
        },
        {
          text: 'Telegram',
          href: 'https://t.me/sobakawow',
        }, 
        {
          text: 'ВКонтакте',
          href: 'https://vk.com/sobakapavlovaltd',
        }, 
        {
          text: 'VC',
          href: 'https://vc.ru/u/230065-sobaka-pavlova',
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
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
