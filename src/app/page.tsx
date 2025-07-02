import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import FestivalDiscovery from '@/components/festival/FestivalDiscovery';
import { festivals } from '@/data/festivals';
import FestivalSuggestionForm from '@/components/ai/FestivalSuggestionForm';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="text-center my-8 md:my-12">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4 animate-fade-in-down">
            Welcome to BharatFest
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover, celebrate, and immerse yourself in the vibrant and diverse festivals of India. Your journey into the heart of Indian culture starts here.
          </p>
        </section>

        <section className="my-12 md:my-16">
          <FestivalSuggestionForm />
        </section>
        
        <FestivalDiscovery festivals={festivals} />
      </main>
      <Footer />
    </>
  );
}
