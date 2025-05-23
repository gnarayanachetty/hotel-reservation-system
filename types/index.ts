import { Hotel as PrismaHotel, Room } from '@prisma/client';

export interface Location {
  city: string;
  country: string;
}

export interface Hotel extends Omit<PrismaHotel, 'location'> {
  location: Location;
  amenities: string[];
  images: string[];
  rooms: Room[];
}