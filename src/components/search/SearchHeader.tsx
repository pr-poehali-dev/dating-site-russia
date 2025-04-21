
import { X, SearchIcon, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterOpen: boolean;
  toggleFilter: () => void;
  userLocation: string;
}

const SearchHeader = ({
  searchTerm,
  setSearchTerm,
  filterOpen,
  toggleFilter,
  userLocation,
}: SearchHeaderProps) => {
  return (
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
  );
};

export default SearchHeader;
