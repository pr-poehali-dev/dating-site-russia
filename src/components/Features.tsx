
import { MapPin, Shield, Gift, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <MapPin className="h-10 w-10 text-love-default" />,
    title: "В каждом регионе России",
    description: "Находите людей в своём городе или в любой точке страны. У нас есть пользователи во всех 85 регионах России."
  },
  {
    icon: <Shield className="h-10 w-10 text-love-default" />,
    title: "Проверенные анкеты",
    description: "Мы боремся с фейковыми аккаунтами и проверяем профили, чтобы вы общались только с реальными людьми."
  },
  {
    icon: <Gift className="h-10 w-10 text-love-default" />,
    title: "Бесплатная регистрация",
    description: "Создайте анкету и начните искать свою любовь прямо сейчас. Основные функции доступны бесплатно."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают именно нас</h2>
          <p className="text-muted-foreground text-lg">
            Наш сервис объединяет людей по всей России уже более 10 лет. 
            Мы сделали всё возможное, чтобы ваш путь к настоящей любви был приятным и безопасным.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-background px-6 py-3 rounded-full border shadow-sm">
            <Heart className="h-5 w-5 text-love-default" fill="#D946EF" />
            <span className="text-lg font-medium">Более 500 000 счастливых пар</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
