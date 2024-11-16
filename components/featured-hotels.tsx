import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

const FEATURED_HOTELS = [
  {
    id: '1',
    name: 'Luxury Resort & Spa',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80',
    rating: 4.8,
    price: 299,
  },
  {
    id: '2',
    name: 'Mountain View Lodge',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1565031491910-e57fac031c41?auto=format&fit=crop&q=80',
    rating: 4.6,
    price: 199,
  },
  {
    id: '3',
    name: 'Urban Boutique Hotel',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
    rating: 4.5,
    price: 249,
  },
];

export function FeaturedHotels() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_HOTELS.map((hotel) => (
          <Link href={`/hotels/${hotel.id}`} key={hotel.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-muted-foreground">{hotel.location}</p>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{hotel.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="text-lg font-bold">
                  ${hotel.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /night
                  </span>
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}