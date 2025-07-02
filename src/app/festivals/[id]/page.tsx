import { notFound } from 'next/navigation';
import Image from 'next/image';
import { festivals } from '@/data/festivals';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import EventRegistration from '@/components/festival/EventRegistration';
import { Calendar, MapPin, Clock } from 'lucide-react';

export async function generateStaticParams() {
  return festivals.map((festival) => ({
    id: festival.id,
  }));
}

export default function FestivalDetailPage({ params }: { params: { id: string } }) {
  const festival = festivals.find((f) => f.id === params.id);

  if (!festival) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={festival.image}
            alt={`Hero image for ${festival.name}`}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            priority
            data-ai-hint={festival.dataAiHint}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="text-4xl md:text-7xl font-headline font-bold text-white text-center drop-shadow-lg">
              {festival.name}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-headline font-bold mb-4 text-primary">About {festival.name}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {festival.longDescription}
              </p>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-bold mb-4">Festival Info</h3>
                  <div className="space-y-3 text-foreground/90">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-accent" />
                      <span>{festival.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-accent" />
                      <span>{festival.region} India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-headline font-bold mb-6 text-primary text-center">Event Schedule</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {festival.events.map((event) => (
                <AccordionItem key={event.name} value={event.name}>
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <div className="font-semibold text-foreground">{event.name}</div>
                        <div className="text-sm text-muted-foreground font-normal">{event.time}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    <p className="mb-4 text-foreground/80">{event.description}</p>
                    <EventRegistration festivalName={festival.name} eventName={event.name} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
