"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface EventType {
  eventId: string;
  userId: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  EventImage: [{ ImagePreview: { url: string } }];
}
export default function EventContentSection() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function getAllEvent() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/event");
        const data = await res.json();
        setEvents(data.data);
        console.log("Fetched events:", data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();
  }, []); // penting: agar useEffect hanya dijalankan sekali saat mount

  return (
    <section className="w-[80%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 border">
      {events.map((event: EventType) => (
        <article key={event.eventId} className="border w-full h-full p-5">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={event.EventImage[0]?.ImagePreview?.url}
              alt={event.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="font-semibold text-lg mb-1">{event.title}</div>
          <div className="text-sm text-gray-600">{event.description}</div>
        </article>
      ))}
    </section>
  );
}
