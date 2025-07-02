'use client';

import { useFavorites } from '@/hooks/useFavorites';
import { festivals as allFestivals } from '@/data/festivals';
import FestivalList from '@/components/festival/FestivalList';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Heart } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function FavoritesPage() {
  const { favorites, isLoaded } = useFavorites();

  const favoriteFestivals = allFestivals.filter((festival) => favorites.includes(festival.id));

  const renderContent = () => {
    if (!isLoaded) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
      );
    }
    
    if (favoriteFestivals.length === 0) {
      return (
        <div className="text-center py-20 bg-card border rounded-lg">
          <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold text-foreground">No Favorites Yet</h2>
          <p className="text-muted-foreground mt-2">
            Click the heart icon on any festival to save it here.
          </p>
        </div>
      );
    }

    return <FestivalList festivals={favoriteFestivals} />;
  };

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Your Favorite Festivals</h1>
          <p className="text-lg text-foreground/80 mt-2">A personalized collection of your most-loved celebrations.</p>
        </div>
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}

const CardSkeleton = () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
)
