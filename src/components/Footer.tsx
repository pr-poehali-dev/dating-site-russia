
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-love-default" fill="#D946EF" />
              <span className="font-bold text-xl gradient-text">СердцеРоссии</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Соединяем сердца по всей России, создаем истории любви и счастья вместе с вами.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 СердцеРоссии. Все права защищены.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Сервис</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-love-default transition-colors">Главная</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-love-default transition-colors">О нас</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-love-default transition-colors">Тарифы</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-love-default transition-colors">Вопросы и ответы</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Знакомства</h3>
              <ul className="space-y-2">
                <li><Link to="/search" className="text-muted-foreground hover:text-love-default transition-colors">Поиск анкет</Link></li>
                <li><Link to="/success" className="text-muted-foreground hover:text-love-default transition-colors">Истории успеха</Link></li>
                <li><Link to="/tips" className="text-muted-foreground hover:text-love-default transition-colors">Советы и статьи</Link></li>
                <li><Link to="/events" className="text-muted-foreground hover:text-love-default transition-colors">События</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li><Link to="/support" className="text-muted-foreground hover:text-love-default transition-colors">Поддержка</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-love-default transition-colors">Политика конфиденциальности</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-love-default transition-colors">Условия использования</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
