import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Digital Ausorar
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">О себе</a>
              <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">Работы</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Цены</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Связаться</a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Заказать проект
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Графический дизайнер
              <span className="text-purple-600"> метавселенных</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаю обложки и аватарки для крупных Roblox игр, телеканалов, концертов и спортивных организаций с коммерческим опытом
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Gamepad2" size={16} className="mr-2" />
                Roblox Games
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Tv" size={16} className="mr-2" />
                Телеканалы
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Music" size={16} className="mr-2" />
                Концерты
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Trophy" size={16} className="mr-2" />
                Спорт
              </Badge>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mr-4">
              Посмотреть работы
            </Button>
            <Button size="lg" variant="outline">
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">О себе</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Профессиональный дизайнер с коммерческим опытом
                </h3>
                <p className="text-gray-600 mb-6">
                  Специализируюсь на создании визуальных решений для метавселенных и развлекательной индустрии. 
                  Работаю с крупными клиентами в СНГ сегменте, создавая запоминающиеся обложки и аватарки.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">5+ лет опыта в графическом дизайне</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">100+ успешных проектов</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Специализация на Roblox и геймдев</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
                  <Icon name="User" size={80} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Мои работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Обложка Roblox игры", category: "Roblox", icon: "Gamepad2", image: "/img/70aed9af-4d09-4bf8-91b1-fba70af79f35.jpg" },
              { title: "Аватарка для телеканала", category: "Телевидение", icon: "Tv", image: "/img/bb51c563-21f5-48e1-8cf7-022d24a6400e.jpg" },
              { title: "Постер концерта", category: "Музыка", icon: "Music", image: "/img/4c150005-a1f3-48b3-a910-2969d54dfe9d.jpg" },
              { title: "Логотип игровой студии", category: "GameDev", icon: "Code", image: null },
              { title: "Баннер спортивного события", category: "Спорт", icon: "Trophy", image: null },
              { title: "Обложка мира Roblox", category: "Roblox", icon: "Gamepad2", image: null }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-gray-200 h-48 flex items-center justify-center rounded-t-lg overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon name={project.icon as any} size={48} className="text-gray-400" />
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">
                    Профессиональный дизайн для {project.category.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Цены</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Базовый</CardTitle>
                <CardDescription className="text-center">Для небольших проектов</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-900">₽5,000</span>
                  <span className="text-gray-600">/проект</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">1 концепт дизайна</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">2 правки</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Срок: 3-5 дней</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-purple-200 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Стандартный</CardTitle>
                <CardDescription className="text-center">Для серьезных проектов</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-900">₽12,000</span>
                  <span className="text-gray-600">/проект</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">3 концепта дизайна</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Неограниченные правки</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Срок: 5-7 дней</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Исходные файлы</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Премиум</CardTitle>
                <CardDescription className="text-center">Для крупных компаний</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-900">₽25,000</span>
                  <span className="text-gray-600">/проект</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">5 концептов дизайна</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Неограниченные правки</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Срок: 3-5 дней</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Связаться со мной</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Контактная информация</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Icon name="Mail" size={20} className="text-purple-600 mr-3" />
                        <span className="text-gray-700">designer@example.com</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Phone" size={20} className="text-purple-600 mr-3" />
                        <span className="text-gray-700">+7 (999) 123-45-67</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="MessageCircle" size={20} className="text-purple-600 mr-3" />
                        <span className="text-gray-700">@designer_telegram</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Время работы</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Пн-Пт: 10:00 - 19:00</p>
                      <p>Сб: 12:00 - 16:00</p>
                      <p>Вс: Выходной</p>
                    </div>
                    <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                      Написать в Telegram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Digital Ausorar</h3>
            <p className="text-gray-400 mb-6">
              Профессиональный графический дизайнер метавселенных
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <Separator className="my-6 bg-gray-800" />
            <p className="text-gray-400 text-sm">
              © 2024 Digital Ausorar. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;