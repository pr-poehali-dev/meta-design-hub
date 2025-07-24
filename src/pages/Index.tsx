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
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Создаю обложки и аватарки для крупных Roblox игр и миров в метавселенных</p>
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
                    <span className="text-gray-700">3+ лет опыта в графическом дизайне</span>
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
      <section id="pricing" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Стоимость работ</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Каждый проект уникален. Стоимость рассчитывается индивидуально в зависимости от сложности и требований.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Факторы ценообразования:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Icon name="Gamepad2" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Тип проекта</p>
                          <p className="text-sm text-muted-foreground">Обложка, аватарка, полный брендинг</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Clock" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Срочность</p>
                          <p className="text-sm text-muted-foreground">Стандартные сроки или экспресс-заказ</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Palette" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Сложность дизайна</p>
                          <p className="text-sm text-muted-foreground">Количество элементов и детализация</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="RefreshCw" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Количество правок</p>
                          <p className="text-sm text-muted-foreground">Дополнительные итерации</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Что входит в работу:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Icon name="FileImage" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Готовые файлы</p>
                          <p className="text-sm text-muted-foreground">PNG, JPG в высоком разрешении</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Users" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Консультации</p>
                          <p className="text-sm text-muted-foreground">Обсуждение концепции и правки</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Shield" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Гарантия качества</p>
                          <p className="text-sm text-muted-foreground">Доработки до полного соответствия</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Zap" size={20} className="text-primary mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Быстрая реализация</p>
                          <p className="text-sm text-muted-foreground">Сроки от 1 дня</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8" />
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Хотите узнать точную стоимость вашего проекта?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Расскажите о ваших требованиях, и я подготовлю индивидуальное предложение
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Обсудить проект
                    </Button>
                  </div>
                </div>
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
                        <span className="text-gray-700">Designer@supergfx.ru</span>
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