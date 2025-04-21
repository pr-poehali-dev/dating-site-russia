
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptySearchResultsProps {
  resetFilters: () => void;
}

const EmptySearchResults = ({ resetFilters }: EmptySearchResultsProps) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
      <div className="bg-muted/50 p-6 rounded-full mb-4">
        <SearchIcon className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">Анкеты не найдены</h3>
      <p className="text-muted-foreground mb-4">Попробуйте изменить параметры поиска</p>
      <Button onClick={resetFilters}>Сбросить фильтры</Button>
    </div>
  );
};

export default EmptySearchResults;
