import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    location: string;
    image: string;
    rating: number;
    price: number;
    description: string;
  };
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotels/${hotel.id}`}>
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
          <p className="text-muted-foreground mb-2">{hotel.location}</p>
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{hotel.rating}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {hotel.description}
          </p>
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
  );
}