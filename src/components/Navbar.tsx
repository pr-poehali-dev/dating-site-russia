
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-love-default" fill="#D946EF" />
          <span className="font-bold text-xl gradient-text">Secret Charm</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="heart-button text-foreground/80 font-medium">
            Главная
          </Link>
          <Link to="/about" className="heart-button text-foreground/80 font-medium">
            О нас
          </Link>
          <Link to="/search" className="heart-button text-foreground/80 font-medium">
            Поиск
          </Link>
          <Link to="/success" className="heart-button text-foreground/80 font-medium">
            Истории успеха
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Войти
          </Button>
          <Button className="bg-love-default hover:bg-love-dark">
            Регистрация
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
