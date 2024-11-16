"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HotelSearchProps {
  className?: string;
}

export function HotelSearch({ className }: HotelSearchProps) {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      location,
      ...(checkIn && { checkIn: checkIn.toISOString() }),
      ...(checkOut && { checkOut: checkOut.toISOString() }),
    });
    router.push(`/hotels/search?${searchParams.toString()}`);
  };

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-4 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow-lg",
        className
      )}
    >
      <div className="flex-1">
        <Input
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full"
        />
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full md:w-[240px] justify-start text-left font-normal",
              !checkIn && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {checkIn ? format(checkIn, "PPP") : <span>Check-in Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={checkIn}
            onSelect={setCheckIn}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full md:w-[240px] justify-start text-left font-normal",
              !checkOut && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {checkOut ? format(checkOut, "PPP") : <span>Check-out Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={checkOut}
            onSelect={setCheckOut}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Button onClick={handleSearch} className="w-full md:w-auto">
        <Search className="mr-2 h-4 w-4" />
        Search Hotels
      </Button>
    </div>
  );
}