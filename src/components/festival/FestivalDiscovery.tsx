'use client';

import { useState, useMemo } from 'react';
import type { Festival } from '@/types';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import FestivalList from './FestivalList';
import { cn } from '@/lib/utils';

interface FestivalDiscoveryProps {
  festivals: Festival[];
}

export default function FestivalDiscovery({ festivals }: FestivalDiscoveryProps) {
  const [regionFilter, setRegionFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState<Date | undefined>();

  const regions = useMemo(() => ['all', ...Array.from(new Set(festivals.map((f) => f.region)))], [festivals]);

  const filteredFestivals = useMemo(() => {
    return festivals.filter((festival) => {
      const regionMatch = regionFilter === 'all' || festival.region === regionFilter;
      const dateMatch = !dateFilter || festival.date.getMonth() === dateFilter.getMonth() && festival.date.getFullYear() === dateFilter.getFullYear();
      return regionMatch && dateMatch;
    });
  }, [festivals, regionFilter, dateFilter]);

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Explore the Festivals</h2>
        <p className="text-lg text-foreground/70 mt-2">Filter by region or date to find your next celebration.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-card rounded-lg border shadow-sm items-center justify-center">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <MapPin className="h-5 w-5 text-accent" />
          <Select value={regionFilter} onValueChange={setRegionFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region} className="capitalize">{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
           <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-full md:w-[280px] justify-start text-left font-normal',
                  !dateFilter && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateFilter ? format(dateFilter, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dateFilter}
                onSelect={setDateFilter}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {(regionFilter !== 'all' || dateFilter) && (
            <Button variant="ghost" onClick={() => { setRegionFilter('all'); setDateFilter(undefined); }}>
                Reset Filters
            </Button>
        )}
      </div>
      
      <FestivalList festivals={filteredFestivals} />
    </section>
  );
}
