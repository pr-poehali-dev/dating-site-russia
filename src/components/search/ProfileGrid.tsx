
import ProfileCard from '@/components/ProfileCard';
import EmptySearchResults from './EmptySearchResults';
import { Profile } from '@/types/profile';

interface ProfileGridProps {
  profiles: Profile[];
  filterOpen: boolean;
  resetFilters: () => void;
}

const ProfileGrid = ({ profiles, filterOpen, resetFilters }: ProfileGridProps) => {
  const gridColsClass = filterOpen ? 'lg:col-span-3' : 'lg:col-span-4';
  const gridTemplateClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${filterOpen ? '3' : '4'} gap-4`;

  return (
    <div className={`${gridTemplateClass} ${gridColsClass}`}>
      {profiles.length > 0 ? (
        profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      ) : (
        <EmptySearchResults resetFilters={resetFilters} />
      )}
    </div>
  );
};

export default ProfileGrid;
