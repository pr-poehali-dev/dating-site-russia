
import { Button } from "@/components/ui/button";
import { Heart, Search, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32 px-4">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-love-light/30 via-background to-secondary/20 -z-10"></div>
      
      {/* Плавающие элементы для декорации */}
      <div className="absolute top-1/4 left-[10%] text-love-default/30 animate-float">
        <Heart className="w-16 h-16" fill="#D946EF" />
      </div>
      <div className="absolute bottom-1/4 right-[15%] text-secondary/40 animate-float animation-delay-1000">
        <Heart className="w-12 h-12" fill="#9b87f5" />
      </div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Найдите свою <span className="gradient-text">любовь</span> на просторах России
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-lg">
              Тысячи людей уже нашли свою вторую половинку с помощью нашего сервиса знакомств. 
              Присоединяйтесь к нам и начните свою историю любви!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-love-default hover:bg-love-dark gap-2">
                <Heart className="w-5 h-5" /> Начать знакомства
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="w-5 h-5" /> Найти анкеты
              </Button>
            </div>
            
            <div className="flex items-center pt-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              <span>85 регионов России, более 2 миллионов пользователей</span>
            </div>
          </div>
          
          <div className="relative mx-auto">
            <div className="relative w-[280px] md:w-[320px] lg:w-[380px] aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/80 to-love-dark/80 shadow-xl overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Пары нашли друг друга" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Плавающая карточка статистики */}
            <div className="absolute -bottom-5 -left-5 bg-background rounded-lg p-4 shadow-lg border animate-pulse-slow">
              <div className="flex items-center gap-3">
                <div className="bg-love-light rounded-full p-2">
                  <Heart className="w-5 h-5 text-love-default" fill="#D946EF" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Сегодня</p>
                  <p className="font-semibold">365+ новых пар</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
