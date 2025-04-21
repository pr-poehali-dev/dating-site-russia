
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, MessageSquare, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  distance: number;
  photos: string[];
  interests: string[];
  about: string;
  lastOnline: string;
  isVerified: boolean;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow animate-fade-in">
      {/* Фото профиля */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img 
          src={profile.photos[0] || "/placeholder.svg"} 
          alt={`Фото ${profile.name}`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Оверлей с информацией о последней активности */}
        <div className="absolute top-2 right-2">
          <Badge variant={profile.lastOnline === "Онлайн" ? "default" : "secondary"} className="text-xs">
            {profile.lastOnline}
          </Badge>
        </div>
        
        {/* Имя, возраст и верификация */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
            {profile.isVerified && <CheckCircle className="w-4 h-4 text-blue-400" fill="#60A5FA" />}
          </div>
          
          <div className="flex items-center text-xs gap-1">
            <MapPin className="w-3 h-3" />
            <span>{profile.location}</span>
            {profile.distance > 0 && (
              <span className="text-white/70">({profile.distance} км от вас)</span>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-3">
        {/* Интересы */}
        <div className="mb-2 flex flex-wrap gap-1">
          {profile.interests.slice(0, 3).map((interest, index) => (
            <Badge key={index} variant="outline" className="text-xs font-normal">
              {interest}
            </Badge>
          ))}
        </div>
        
        {/* О себе (краткое описание) */}
        <p className="text-sm text-muted-foreground line-clamp-2">{profile.about}</p>
      </CardContent>
      
      <CardFooter className="p-3 pt-0 gap-2">
        <Button 
          variant={liked ? "default" : "outline"} 
          size="sm" 
          className={`flex-1 gap-1 ${liked ? "bg-love-default hover:bg-love-dark" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-white" : ""}`} />
          {liked ? "Нравится" : "Нравится"}
        </Button>
        <Button variant="outline" size="sm" className="flex-1 gap-1">
          <MessageSquare className="w-4 h-4" />
          Сообщение
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
