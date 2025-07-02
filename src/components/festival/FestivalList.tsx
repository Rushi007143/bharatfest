'use client';

import type { Festival } from '@/types';
import FestivalCard from './FestivalCard';

interface FestivalListProps {
  festivals: Festival[];
}

export default function FestivalList({ festivals }: FestivalListProps) {
  if (festivals.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold text-foreground">No Festivals Found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your filters or checking back later!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {festivals.map((festival, index) => (
        <FestivalCard key={festival.id} festival={festival} index={index} />
      ))}
    </div>
  );
}
