
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchHeader from "@/components/search/SearchHeader";
import SearchFilters from "@/components/search/SearchFilters";
import ProfileGrid from "@/components/search/ProfileGrid";
import { MOCK_PROFILES } from "@/data/mockProfiles";

const Search = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [ageRange, setAgeRange] = useState([18, 45]);
  const [distance, setDistance] = useState([100]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation] = useState("пгт. Забайкальск");

  const toggleFilter = () => setFilterOpen(!filterOpen);

  const resetFilters = () => {
    setSearchTerm("");
    setAgeRange([18, 45]);
    setDistance([100]);
  };

  // Фильтрация профилей
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
          <SearchHeader 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterOpen={filterOpen}
            toggleFilter={toggleFilter}
            userLocation={userLocation}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Панель фильтров */}
            {filterOpen && (
              <SearchFilters 
                ageRange={ageRange}
                setAgeRange={setAgeRange}
                distance={distance}
                setDistance={setDistance}
                resetFilters={resetFilters}
              />
            )}
            
            {/* Сетка анкет */}
            <ProfileGrid 
              profiles={filteredProfiles} 
              filterOpen={filterOpen} 
              resetFilters={resetFilters} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
