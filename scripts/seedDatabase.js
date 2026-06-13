const mongoose = require('mongoose')
require('dotenv').config()

const PortfolioItem = require('../src/models/Portfolio')
const Testimonial = require('../src/models/Testimonial')

const portfolioData = [
  {
    title: 'Лендинг',
    description: 'Одностраничный site для продвижения продукта или услуги',
    price: 15000,
    image: '📄',
    features: ['SEO оптимизация', 'Мобильная версия', 'Форма заказа']
  },
  {
    title: 'E-commerce',
    description: 'Интернет-магазин с каталогом товаров и системой оплаты',
    price: 50000,
    image: '🛒',
    features: ['Каталог товаров', 'Система оплаты', 'Управление заказами']
  },
  {
    title: 'Портфолио',
    description: 'Персональный site для демонстрации работ и проектов',
    price: 25000,
    image: '🎨',
    features: ['Галерея работ', 'Резюме', 'Контакты']
  },
  {
    title: 'Корпоративный сайт',
    description: 'Профессиональный site компании с информацией о услугах',
    price: 75000,
    image: '🏢',
    features: ['О компании', 'Услуги', 'Контакты', 'Блог']
  },
  {
    title: 'Мобильное приложение',
    description: 'Нативное или кросс-платформенное мобильное приложение',
    price: 100000,
    image: '📱',
    features: ['iOS/Android', 'Синхронизация', 'Push-уведомления']
  },
  {
    title: 'Веб-приложение (SPA)',
    description: 'Полнофункциональное одностраничное веб-приложение',
    price: 60000,
    image: '⚙️',
    features: ['React/Vue', 'REST API', 'Аутентификация']
  },
  {
    title: 'Telegram Бот',
    description: 'Умный бот для Telegram с автоматизацией',
    price: 20000,
    image: '🤖',
    features: ['Обработка команд', 'БД управления', 'Уведомления']
  },
  {
    title: 'Чат-бот',
    description: 'AI-чатбот для сайта или мессенджеров',
    price: 35000,
    image: '💬',
    features: ['NLP обработка', 'Интеграция API', 'Аналитика']
  }
]

const testimonialData = [
  {
    name: 'Иван Сидоров',
    company: 'ООО Компания A',
    text: 'Отличная работа! Сайт готов в срок и отлично работает.',
    rating: 5
  },
  {
    name: 'Мария Петрова',
    company: 'ИП Петрова',
    text: 'Профессионалы своего дела. Очень доволена результатом.',
    rating: 5
  },
  {
    name: 'Алексей Волков',
    company: 'Звездочка LTD',
    text: 'Хорошее качество и адекватная цена. Рекомендую!',
    rating: 4
  },
  {
    name: 'Олег Машинский',
    company: 'StartUp Bot',
    text: 'Telegram бот функционирует безупречно! Спасибо команде за профессиональный подход.',
    rating: 5
  },
  {
    name: 'Дарья Соколова',
    company: 'Интернет Магазин',
    text: 'Чат-бот на сайте увеличил количество обращений на 40%. Отличное решение!',
    rating: 5
  }
]

async function seedDatabase() {
  try {
    // Используем уже открытое сервером подключение или подключаемся заново
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect('mongodb+srv://ashatulumuhamed_db_user:Muhaha96@dbadmin.8tczbuw.mongodb.net/production?appName=dbadmin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }

    console.log('✅ Connected to MongoDB for seeding')

    // Очищаем старые данные
    await PortfolioItem.deleteMany({})
    await Testimonial.deleteMany({})
    console.log('🗑️ Cleared existing data')

    // Записываем новые данные
    await PortfolioItem.insertMany(portfolioData)
    console.log(`✅ Inserted ${portfolioData.length} portfolio items`)

    await Testimonial.insertMany(testimonialData)
    console.log(`✅ Inserted ${testimonialData.length} testimonials`)

    console.log('🎉 Database seeded successfully!')
    return true; // Возвращаем успех без убийства сервера
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error;
  }
}

// Экспортируем функцию наружу для нашего роута
module.exports = seedDatabase;