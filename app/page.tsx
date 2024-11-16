import { HotelSearch } from '@/components/hotel-search';
import { FeaturedHotels } from '@/components/featured-hotels';
import { HowItWorks } from '@/components/how-it-works';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative h-[600px] rounded-xl overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
          <p className="text-xl mb-8">
            Discover and book the best hotels around the world
          </p>
          <HotelSearch className="w-full max-w-4xl" />
        </div>
      </section>

      <FeaturedHotels />
      <HowItWorks />
    </div>
  );
}