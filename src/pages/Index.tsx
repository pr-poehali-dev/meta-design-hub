import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Header */}
      <header className="bg-transparent border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              GFX DESIGNER
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-purple-200 hover:text-white transition-colors">Главная</a>
              <a href="#services" className="text-purple-200 hover:text-white transition-colors">Услуги</a>
              <a href="#portfolio" className="text-purple-200 hover:text-white transition-colors">Портфолио</a>
              <a href="#about" className="text-purple-200 hover:text-white transition-colors">Обо мне</a>
              <a href="#contact" className="text-purple-200 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-500 border-purple-400">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                GFX-ДИЗАЙН ДЛЯ
                <br />ROBLOX И
                <br />МЕТАВСЕЛЕННЫХ
              </h1>
              <p className="text-xl text-purple-200 mb-8 max-w-lg">
                Промо-обложки, аватарки и стиль для топовых игр и медиа проектов
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-500 px-8">
                  Портфолио
                </Button>
                <Button size="lg" variant="outline" className="border-purple-400 text-white hover:bg-purple-800">
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-3xl"></div>
              <img 
                src="/img/bdfb5baa-a93e-4796-8aa3-7c2fac9ca78e.jpg" 
                alt="GFX Designer Character"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ОБЛОЖКИ\nROBLOX", icon: "Gamepad2", gradient: "from-purple-600 to-pink-600" },
              { title: "GFX-АВАТАРКИ", icon: "User", gradient: "from-blue-600 to-purple-600" },
              { title: "БРЕНДИНГ\nДЛЯ СТУДИЙ", icon: "Palette", gradient: "from-purple-600 to-indigo-600" },
              { title: "ТВ И\nКОНЦЕРТЫ", icon: "Tv", gradient: "from-indigo-600 to-purple-600" }
            ].map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg whitespace-pre-line">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">PORTFOLIO</h2>
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-800/50 rounded-full p-2 gap-2">
              <Button className="bg-purple-600 hover:bg-purple-500 rounded-full px-6">Все</Button>
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-800 rounded-full px-6">Roblox</Button>
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-800 rounded-full px-6">Real Projects</Button>
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-800 rounded-full px-6">Motion</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, index) => (
              <Card key={index} className="bg-gray-900/30 border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 h-48 rounded-t-lg flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors"></div>
                  <Icon name="Image" size={48} className="text-purple-300 relative z-10" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">ОБО МНЕ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <Icon name="User" size={80} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                  Пр едо, стрмясосуючат чревоктрдзавовос рас индивндултя 
                  проаграда. Эна сзводит от сложности, строком  форшата и форолатам 
                  и тросатовные клианток
                </p>
                <div className="flex gap-8 text-center">
                  <div className="text-purple-300">
                    <div className="text-3xl font-bold text-white mb-2">CNF</div>
                  </div>
                  <div className="text-purple-300">
                    <div className="text-3xl font-bold text-white mb-2">CCG</div>
                  </div>
                  <div className="text-purple-300">
                    <div className="text-3xl font-bold text-white mb-2">BOC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8">СТОИМОСТЬ</h2>
          <p className="text-purple-200 text-lg mb-12 max-w-2xl">
            Кв-ждыи проокт тривепт мимолокипого поджама,
            сорья резасишат кракрсныыс.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">CONTACTS</h2>
          <div className="max-w-lg mx-auto">
            <Card className="bg-gray-900/50 border-purple-500/30">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-purple-400 mr-4" />
                    <span className="text-white">designer@example.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-purple-400 mr-4" />
                    <span className="text-white">@designer_telegram</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="Instagram" size={24} className="text-purple-400 mr-4" />
                    <span className="text-white">@gfx_designer</span>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-500 mt-8">
                    Написать в Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 text-white py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">GFX DESIGNER</h3>
            <p className="text-purple-200 mb-6">
              Профессиональный дизайнер для Roblox и метавселенных
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-purple-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-purple-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-purple-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
            <Separator className="my-6 bg-purple-500/30" />
            <p className="text-purple-300 text-sm">
              © 2024 GFX Designer. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;