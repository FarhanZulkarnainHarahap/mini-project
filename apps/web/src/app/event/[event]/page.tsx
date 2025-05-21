"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface EventType {
  eventId: string;
  userId: string;
  title: string;
  description: string;
  location: string;
  isPaid: boolean;
  price: number;
  startDate: Date;
  endDate: Date;
  availableSeats: number;
  imageUrl: string;
  createdAt: Date;
}

export default function EventsDetail({
  params,
}: {
  params: { eventId: string };
}) {
  const [event, setEvent] = useState<EventType | null>(null);
  const { eventId } = params;

  useEffect(() => {
    async function getEventDetail() {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/event/${eventId}?loadRelations=category`
        );
        const data = await res.json();
        setEvent(data.data);
        console.log("Fetched event:", data.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    }

    getEventDetail();
  }, [eventId]); // masukkan eventId ke dalam dependency agar aman

  if (!event) return <p className="text-white p-8">Loading...</p>;

  return (
    <main className="py-8 px-8 text-white">
      <article className="w-full max-w-[1100px] mx-auto">
        <div className="w-full h-96 relative">
          <Image
            src={event.imageUrl}
            alt="Hero image"
            fill
            className="object-cover"
          />
        </div>

        {/* <span className="block py-2 px-4 text-sm border border-white mt-4 w-fit">
          {event.category?.name}
        </span> */}

        <h2 className="mt-8 text-4xl font-extrabold">{event.title}</h2>
        <p className="mt-4">{event.description}</p>
      </article>
    </main>
  );
}
