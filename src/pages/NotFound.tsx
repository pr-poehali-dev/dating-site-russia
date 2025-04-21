
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-love-light/30 via-background to-secondary/20 p-4">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-love-light flex items-center justify-center">
          <Heart className="w-8 h-8 text-love-default" fill="#D946EF" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-medium mb-4">Страница не найдена</h2>
        
        <p className="text-muted-foreground mb-8">
          Кажется, мы не смогли найти страницу, которую вы искали. 
          Возможно, вы ошиблись при вводе адреса или страница была перемещена.
        </p>
        
        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <Home className="w-5 h-5" /> Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
