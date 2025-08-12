import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Icon name="Settings" className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold text-gray-900">ТехСнабПром</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition">О компании</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition">Услуги</a>
            <a href="#equipment" className="text-gray-600 hover:text-primary transition">Оборудование</a>
            <a href="#partners" className="text-gray-600 hover:text-primary transition">Партнеры</a>
            <a href="#contacts" className="text-gray-600 hover:text-primary transition">Контакты</a>
          </nav>
          <Button>Связаться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6">Участник госзакупок</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Поставка промышленного<br />
            оборудования из Китая и России
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Надежный партнер для тендерных закупок. Полный цикл поставки оборудования 
            с гарантией качества и соблюдением сроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Icon name="FileText" className="mr-2" size={20} />
              Отправить заявку
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать каталог
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Успешных поставок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Соблюдение сроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Профессиональные поставки для государственных и коммерческих тендеров
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Наша компания специализируется на поставке промышленного оборудования 
                из Китая и России. Мы работаем как с государственными, так и с коммерческими 
                заказчиками, обеспечивая полное соответствие требованиям тендерной документации.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Сертификация</h3>
                    <p className="text-sm text-gray-600">Все необходимые документы и сертификаты</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Гарантия</h3>
                    <p className="text-sm text-gray-600">Полная гарантия на все оборудование</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Логистика</h3>
                    <p className="text-sm text-gray-600">Доставка по всей России</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Handshake" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Поддержка</h3>
                    <p className="text-sm text-gray-600">Техническое сопровождение</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Icon name="Building2" className="text-primary" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Полный спектр услуг</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От поиска оборудования до послепродажного обслуживания
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-primary" size={24} />
                </div>
                <CardTitle>Поиск и подбор оборудования</CardTitle>
                <CardDescription>
                  Найдем оптимальное решение по техническим характеристикам и бюджету
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileCheck" className="text-primary" size={24} />
                </div>
                <CardTitle>Подготовка документов</CardTitle>
                <CardDescription>
                  Полный пакет документов для участия в тендерах и госзакупках
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" className="text-primary" size={24} />
                </div>
                <CardTitle>Поставка под ключ</CardTitle>
                <CardDescription>
                  Комплексная поставка с логистикой и таможенным оформлением
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-primary" size={24} />
                </div>
                <CardTitle>Монтаж и наладка</CardTitle>
                <CardDescription>
                  Профессиональный монтаж и пуско-наладочные работы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-primary" size={24} />
                </div>
                <CardTitle>Сервисное обслуживание</CardTitle>
                <CardDescription>
                  Техническое обслуживание и ремонт оборудования
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="HeadphonesIcon" className="text-primary" size={24} />
                </div>
                <CardTitle>Консультации</CardTitle>
                <CardDescription>
                  Экспертные консультации по выбору и эксплуатации оборудования
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Оборудование</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Категории оборудования</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Поставляем широкий спектр промышленного оборудования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  <Icon name="Cog" className="text-primary" size={32} />
                </div>
                <CardTitle>Станки и оборудование</CardTitle>
                <CardDescription>
                  Металлообрабатывающие станки, прессы, литейное оборудование
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <CardTitle>Электрооборудование</CardTitle>
                <CardDescription>
                  Генераторы, трансформаторы, электродвигатели, системы управления
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  <Icon name="Thermometer" className="text-primary" size={32} />
                </div>
                <CardTitle>Климатическое</CardTitle>
                <CardDescription>
                  Кондиционеры, вентиляция, отопительное и холодильное оборудование
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  <Icon name="Hammer" className="text-primary" size={32} />
                </div>
                <CardTitle>Строительное</CardTitle>
                <CardDescription>
                  Краны, экскаваторы, бетономешалки, строительные инструменты
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Партнеры</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши партнеры</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем с ведущими производителями России и Китая
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div className="w-full h-16 bg-gray-200 rounded flex items-center justify-center">
                  <Icon name="Building" className="text-gray-400" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="secondary" className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600 mb-8">
                Готовы обсудить ваш проект и предложить оптимальное решение
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@techsnabprom.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Промышленная, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Время работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Отправить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Название организации
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="ООО «Ваша компания»"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Контактное лицо
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Описание запроса
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Опишите требуемое оборудование или услугу"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="Settings" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">ТехСнабПром</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Надежный партнер в поставках промышленного оборудования для тендеров и госзакупок.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition cursor-pointer">
                  <Icon name="Phone" size={18} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition cursor-pointer">
                  <Icon name="Mail" size={18} />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition cursor-pointer">
                  <Icon name="Globe" size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Поиск оборудования</a></li>
                <li><a href="#" className="hover:text-white transition">Подготовка документов</a></li>
                <li><a href="#" className="hover:text-white transition">Поставка под ключ</a></li>
                <li><a href="#" className="hover:text-white transition">Монтаж и наладка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Оборудование</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Станки</a></li>
                <li><a href="#" className="hover:text-white transition">Электрооборудование</a></li>
                <li><a href="#" className="hover:text-white transition">Климатическое</a></li>
                <li><a href="#" className="hover:text-white transition">Строительное</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@techsnabprom.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТехСнабПром. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}