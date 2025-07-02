'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Festival } from '@/types';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface FestivalCardProps {
  festival: Festival;
  index: number;
}

export default function FestivalCard({ festival, index }: FestivalCardProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();

  const isFav = isFavorite(festival.id);
  const animationDelay = `${index * 100}ms`;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-down" style={{animationDelay}}>
      <CardHeader className="p-0 relative">
        <Link href={`/festivals/${festival.id}`}>
          <Image
            src={festival.image}
            alt={`Image of ${festival.name}`}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={festival.dataAiHint}
          />
        </Link>
        <div className="absolute top-2 right-2">
            {isLoaded ? (
                 <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full bg-card/70 hover:bg-card"
                    onClick={() => toggleFavorite(festival.id)}
                    aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <Heart className={cn('h-6 w-6', isFav ? 'text-accent fill-accent' : 'text-primary-foreground')} />
                </Button>
            ) : <Skeleton className="h-10 w-10 rounded-full" />}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/festivals/${festival.id}`}>
          <CardTitle className="font-headline text-xl mb-2 text-primary hover:underline">{festival.name}</CardTitle>
          <CardDescription className="text-foreground/80 line-clamp-2">{festival.description}</CardDescription>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-2">
         <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {festival.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {festival.region}
          </div>
          <Button asChild className="w-full mt-4 bg-primary/90 hover:bg-primary">
            <Link href={`/festivals/${festival.id}`}>View Details</Link>
          </Button>
      </CardFooter>
    </Card>
  );
}
