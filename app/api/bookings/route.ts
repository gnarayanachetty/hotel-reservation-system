import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const data = await req.json();
    const booking = await prisma.booking.create({
      data: {
        ...data,
        userId: session.user.id,
        status: "CONFIRMED",
        paymentStatus: "PENDING",
      },
      include: {
        hotel: true,
        room: true,
      },
    });

    // Update room status
    await prisma.room.update({
      where: { id: data.roomId },
      data: { status: "BOOKED" },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 