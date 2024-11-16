import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");

    let query: any = {};

    if (city) {
      query.location = {
        city: {
          contains: city,
          mode: 'insensitive'
        }
      };
    }

    const hotels = await prisma.hotel.findMany({
      where: query,
      include: {
        rooms: true,
      },
    });

    return NextResponse.json(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 