import { HotelCard } from "../../components/hotel-card";
import { HotelSearch } from "../../components/hotel-search";

async function getHotels() {
  // This would normally fetch from your API
  return [
    {
      id: "1",
      name: "Luxury Resort & Spa",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      rating: 4.8,
      price: 299,
      description: "Experience luxury at its finest with our beachfront resort.",
    },
    {
      id: "2",
      name: "Mountain View Lodge",
      location: "Switzerland",
      image: "https://images.unsplash.com/photo-1565031491910-e57fac031c41?auto=format&fit=crop&q=80",
      rating: 4.6,
      price: 199,
      description: "Breathtaking mountain views and cozy accommodations.",
    },
    {
      id: "3",
      name: "Urban Boutique Hotel",
      location: "New York",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80",
      rating: 4.5,
      price: 249,
      description: "Modern luxury in the heart of the city.",
    },
  ];
}

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Hotel</h1>
      
      <div className="mb-8">
        <HotelSearch />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}