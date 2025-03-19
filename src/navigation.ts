import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import merge from 'lodash.merge';

export const headerData = {
  links: [
    {
      text: 'Портфолио',
      href: '/portfolio',
    },
    {
      text: 'Услуги',
      href: '/services',
      links: [
        {
          text: 'Все услуги',
          href: getPermalink('/services'),
        },
        {
          text: 'UX/UI-дизайн под ключ',
          href: getPermalink('/services/ux-design'),
        },
        {
          text: 'Точечный редизайн интерфейса',
          href: getPermalink('/services/redesign'),
        },
        {
          text: 'Добавление новой функциональности',
          href: getPermalink('/services/new-features'),
        },
        {
          text: 'Прототип под инвестиции',
          href: getPermalink('/services/prototype'),
        },
        {
          text: 'UI-редизайн',
          href: getPermalink('/services/ui-redesign'),
        },
        {
          text: 'Продуктовое исследование',
          href: getPermalink('/services/research'),
        }, 
        {
          text: 'UX-аудит',
          href: getPermalink('/services/ux-audit'),
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
      text: 'Экспертиза',
      href: '/expertise',
      links: [
        {
          text: 'Статьи',
          href: getPermalink('/publications'),
        },
        {
          text: 'Книги',
          href: "https://sobakapav.ru/books",
        },
        {
          text: 'UX-исследования',
          href: getPermalink('/ux-research'),
        }, 
        {
          text: 'Передача макетов в разработку',
          href: getPermalink('/design2dev'),
        },
        {
          text: '100 шпаргалок по дизайну интерфейсов',
          href: "https://sobakapav.ru/cheatsheets",
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
          text: 'О компании',
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
          href: getPermalink('/publications'),
        },
        {
          text: 'UX-исследования',
          href: getPermalink('/ux-research'),
        }, 
        {
          text: 'Передача макетов в разработку',
          href: getPermalink('/design2dev'),
        },
        {
          text: '100 шпаргалок по дизайну интерфейсов',
          href: 'https://sobakapav.ru/cheatsheets',
        },    
        {
          text: 'Книги',
          href: 'https://sobakapav.ru/books',
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

export const portfolioFilters = {
  'Отрасли': {
    'med': 'Медицина',
    'prom': 'Промышленность',
    'fin': 'Финансы',
    'it': 'IT для бизнеса',
    'ec': 'E-commerce',
    'ed': 'Образование',
    'gos': 'Госсектор и безопасность',
    'log': 'Транспорт и туризм', 
  },
  
  'Платформа': {
    'mob': 'Мобильные интерфейсы',
    'gui': 'GUI устройств и приборов',
  },
  
  'Пользователь': {
    'prof': 'Профессиональные интерфейсы',
    'mass': 'Массовые интерфейсы',
  },
  
  'Услуги': {
    'ux-design': 'UX-дизайн под ключ',
    'prototype': 'Прототип под инвестиции',
    'new-features': 'Добавление новой функциональности',
    'ui-redesign': 'UI-редизайн',
    'redesign': 'Точечный редизайн',
    'ux-audit': 'UX-аудит',
    'research': 'UX-исследование',
    'dev-team': 'Команда разработки',
    'product-team': 'Продуктовая команда',
    'consultation': 'Консультация',
    'content-design': 'Контент-дизайн',
  },
  
};

const overrides = {
  'ux-design': 'UX-дизайн',
  'prototype': 'Прототип',
  'new-features': 'Добавление нового',
  'ui-redesign': 'UI',
  'redesign': 'Редизайн',
  'ux-audit': 'Аудит',
  'research': 'Исследование',
  'dev-team': 'Команда разработки',
  'product-team': 'Продуктовая команда',
  'consultation': 'Консультация',
  'content-design': 'Контент',
  'gos': 'Госсектор',
  'log': 'Транспорт',
  'mob': 'Мобильный',
  'gui': 'GUI устройств',
  'prof': 'Профессиональный',
  'mass': 'Массовый',
};

export const tagNames = merge(merge({}, ...Object.values(portfolioFilters)), overrides);
