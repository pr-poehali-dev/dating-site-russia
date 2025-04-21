
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchFiltersProps {
  ageRange: number[];
  setAgeRange: (range: number[]) => void;
  distance: number[];
  setDistance: (range: number[]) => void;
  resetFilters: () => void;
}

const SearchFilters = ({
  ageRange,
  setAgeRange,
  distance,
  setDistance,
  resetFilters,
}: SearchFiltersProps) => {
  return (
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
          <Button variant="outline" size="sm" className="flex-1" onClick={resetFilters}>
            Сбросить
          </Button>
          <Button size="sm" className="flex-1">
            Применить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SearchFilters;
