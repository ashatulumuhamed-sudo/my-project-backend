// In-memory data storage
const orders = []
const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce магазин',
    description: 'Полнофункциональный онлайн магазин с корзиной',
    price: 50000,
    image: '🛍️',
    features: ['Каталог товаров', 'Система оплаты', 'Личный кабинет']
  },
  {
    id: 2,
    title: 'Лендинг страница',
    description: 'Быстрый лендинг для продвижения услуг',
    price: 15000,
    image: '📄',
    features: ['Адаптивный дизайн', 'SEO оптимизация', 'Форма обратной связи']
  },
  {
    id: 3,
    title: 'Портфолио сайт',
    description: 'Сайт-портфолио для портфолио',
    price: 25000,
    image: '🎨',
    features: ['Галерея работ', 'Блог', 'Контакты']
  },
  {
    id: 4,
    title: 'Корпоративный сайт',
    description: 'Профессиональный сайт для компании',
    price: 75000,
    image: '🏢',
    features: ['Многостраничный сайт', 'CMS', 'Аналитика']
  },
  {
    id: 5,
    title: 'Мобильное приложение',
    description: 'Native или гибридное мобильное приложение',
    price: 100000,
    image: '📱',
    features: ['iOS/Android', 'Синхронизация', 'Push-уведомления']
  },
  {
    id: 6,
    title: 'SPA Приложение',
    description: 'Современное одностраничное приложение',
    price: 60000,
    image: '⚡',
    features: ['React/Vue', 'API интеграция', 'Реал-тайм обновления']
  },
  {
    id: 7,
    title: 'Telegram Бот',
    description: 'Умный бот для Telegram с автоматизацией',
    price: 20000,
    image: '🤖',
    features: ['Обработка команд', 'Бд управления', 'Уведомления']
  },
  {
    id: 8,
    title: 'Чат-бот',
    description: 'AI-чатбот для сайта или мессенджеров',
    price: 35000,
    image: '💬',
    features: ['NLP обработка', 'Интеграция API', 'Аналитика']
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Иван Сидоров',
    company: 'ООО Компания A',
    text: 'Отличная работа! Сайт готов в срок и отлично работает.',
    rating: 5
  },
  {
    id: 2,
    name: 'Мария Петрова',
    company: 'ИП Петрова',
    text: 'Профессионалы своего дела. Очень доволена результатом.',
    rating: 5
  },
  {
    id: 3,
    name: 'Алексей Волков',
    company: 'Звездочка LTD',
    text: 'Хорошее качество и адекватная цена. Рекомендую!',
    rating: 4
  },
  {
    id: 4,
    name: 'Олег Машинский',
    company: 'StartUp Bot',
    text: 'Telegram бот функционирует безупречно! Спасибо команде за профессиональный подход.',
    rating: 5
  },
  {
    id: 5,
    name: 'Дарья Соколова',
    company: 'Интернет Магазин',
    text: 'Чат-бот на сайте увеличил количество обращений на 40%. Отличное решение!',
    rating: 5
  }
]

module.exports = {
  orders,
  portfolioItems,
  testimonials
}
