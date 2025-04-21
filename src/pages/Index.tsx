
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Star, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero секция */}
        <Hero />
        
        {/* Особенности сервиса */}
        <Features />
        
        {/* Как это работает */}
        <section className="py-20 container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground text-lg">
              Всего три простых шага отделяют вас от новых знакомств и потенциальной любви на всю жизнь
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Соединительная линия */}
            <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-love-light via-love-default to-love-dark -z-10"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-love-light flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-love-default">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Создайте анкету</h3>
              <p className="text-muted-foreground">
                Зарегистрируйтесь и заполните профиль, добавьте свои лучшие фотографии и расскажите о себе
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-love-light flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-love-default">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ищите знакомства</h3>
              <p className="text-muted-foreground">
                Просматривайте анкеты людей, которые вам интересны, используя различные фильтры поиска
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-love-light flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-love-default">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Начните общение</h3>
              <p className="text-muted-foreground">
                Отправляйте сообщения, делитесь фотографиями и договаривайтесь о встрече в реальной жизни
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA секция */}
        <section className="py-20 bg-gradient-to-br from-love-light/30 via-background to-secondary/20">
          <div className="container text-center max-w-3xl mx-auto">
            <div className="inline-flex gap-1 items-center bg-love-light/50 text-love-dark px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Более 2000 новых регистраций ежедневно</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы найти свою <span className="gradient-text">вторую половинку</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Присоединяйтесь к тысячам людей, которые уже нашли свою любовь на нашем сервисе знакомств.
              Регистрация займет всего несколько минут!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-love-default hover:bg-love-dark gap-2">
                <Heart className="w-5 h-5" /> Создать анкету
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Узнать больше <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} className="w-5 h-5 text-amber-400" fill="#FBBF24" />
                ))}
              </div>
              <span className="text-muted-foreground">4.8 из 5 на основе 10,000+ отзывов</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
