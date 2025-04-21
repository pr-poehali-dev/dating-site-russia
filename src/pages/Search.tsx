
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MapPin, Filter, Search as SearchIcon, X, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProfileCard from "@/components/ProfileCard";

// Моковые данные профилей
const MOCK_PROFILES = [
  {
    id: 1,
    name: "Анна",
    age: 28,
    location: "Чита",
    distance: 184,
    photos: ["/placeholder.svg"],
    interests: ["Путешествия", "Фотография", "Йога"],
    about: "Люблю путешествовать и фотографировать красивые места. Ищу человека для совместных приключений.",
    lastOnline: "Онлайн",
    isVerified: true,
  },
  {
    id: 2,
    name: "Дмитрий",
    age: 32,
    location: "Забайкальск",
    distance: 0,
    photos: ["/placeholder.svg"],
    interests: ["Спорт", "Кино", "Музыка"],
    about: "Активный и позитивный человек. Увлекаюсь спортом и хорошим кино.",
    lastOnline: "3 часа назад",
    isVerified: true,
  },
  {
    id: 3,
    name: "Екатерина",
    age: 26,
    location: "Борзя",
    distance: 121,
    photos: ["/placeholder.svg"],
    interests: ["Книги", "Готовка", "Танцы"],
    about: "Обожаю читать классическую литературу и готовить. Танцую с детства.",
    lastOnline: "Вчера",
    isVerified: false,
  },
  {
    id: 4,
    name: "Александр",
    age: 34,
    location: "Чита",
    distance: 184,
    photos: ["/placeholder.svg"],
    interests: ["Туризм", "Рыбалка", "Программирование"],
    about: "Разработчик, в свободное время люблю активный отдых на природе.",
    lastOnline: "Онлайн",
    isVerified: true,
  },
  {
    id: 5,
    name: "Ольга",
    age: 29,
    location: "Краснокаменск",
    distance: 90,
    photos: ["/placeholder.svg"],
    interests: ["Искусство", "Театр", "Психология"],
    about: "Творческая личность с интересом к психологии и саморазвитию.",
    lastOnline: "2 дня назад",
    isVerified: true,
  },
  {
    id: 6,
    name: "Сергей",
    age: 31,
    location: "Забайкальск",
    distance: 0,
    photos: ["/placeholder.svg"],
    interests: ["Автомобили", "Футбол", "Бизнес"],
    about: "Предприниматель, увлекаюсь автомобилями и спортом.",
    lastOnline: "Онлайн",
    isVerified: false,
  },
];

const Search = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [ageRange, setAgeRange] = useState([18, 45]);
  const [distance, setDistance] = useState([100]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation] = useState("пгт. Забайкальск");

  const toggleFilter = () => setFilterOpen(!filterOpen);

  // Фильтрация профилей (базовая имплементация)
  const filteredProfiles = MOCK_PROFILES.filter(profile => {
    const nameMatch = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const ageMatch = profile.age >= ageRange[0] && profile.age <= ageRange[1];
    const distanceMatch = profile.distance <= distance[0];
    return nameMatch && ageMatch && distanceMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-10">
        <div className="container max-w-7xl">
          {/* Заголовок и строка поиска */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Поиск анкет</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{userLocation}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Поиск по имени..." 
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button 
                variant={filterOpen ? "default" : "outline"} 
                onClick={toggleFilter}
                className="gap-2"
              >
                <Filter className="w-4 h-4" /> 
                Фильтры
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Панель фильтров */}
            {filterOpen && (
              <Card className="p-4 lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Кого вы ищете</h4>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="women" />
                        <Label htmlFor="women">Женщины</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="men" />
                        <Label htmlFor="men">Мужчины</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Возраст: {ageRange[0]} - {ageRange[1]}</h4>
                    <Slider 
                      defaultValue={[18, 45]} 
                      max={80} 
                      min={18} 
                      step={1} 
                      value={ageRange}
                      onValueChange={setAgeRange}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Расстояние: до {distance[0]} км</h4>
                    <Slider 
                      defaultValue={[100]} 
                      max={500} 
                      min={1} 
                      step={1}
                      value={distance}
                      onValueChange={setDistance}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Интересы</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите интересы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="travel">Путешествия</SelectItem>
                        <SelectItem value="sport">Спорт</SelectItem>
                        <SelectItem value="music">Музыка</SelectItem>
                        <SelectItem value="art">Искусство</SelectItem>
                        <SelectItem value="food">Кулинария</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Сбросить</Button>
                    <Button size="sm" className="flex-1">Применить</Button>
                  </div>
                </div>
              </Card>
            )}
            
            {/* Сетка анкет */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${filterOpen ? '3' : '4'} gap-4 ${filterOpen ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
              {filteredProfiles.length > 0 ? (
                filteredProfiles.map(profile => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-muted/50 p-6 rounded-full mb-4">
                    <SearchIcon className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Анкеты не найдены</h3>
                  <p className="text-muted-foreground mb-4">Попробуйте изменить параметры поиска</p>
                  <Button onClick={() => {
                    setSearchTerm("");
                    setAgeRange([18, 45]);
                    setDistance([100]);
                  }}>Сбросить фильтры</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
