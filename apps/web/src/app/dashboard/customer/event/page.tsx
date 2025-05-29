"use client";

import Header from "@/components/Header-section/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ImageType {
  id?: string;
  url: string;
}
interface EventType {
  id: string;
  userId: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  imagePreview: ImageType[];
  imageContent: ImageType[];
  EventImage: [{ ImagePreview: { url: string } }];
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function getAllEvent() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/event/");
        const data = await res.json();
        setEvents(data.data);

        console.log(data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();
  }, []); // penting: agar useEffect hanya dijalankan sekali saat mount

  return (
    <main className="min-h-screen grid place-items-center pt-20">
      <Header />
      <section className="w-[90%] h-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event: EventType) => (
          <article
            key={event.id}
            className="bg-white shadow-lg rounded p-4 border h-fit"
          >
            {event.imagePreview.map((img) => (
              <div key={img.id} className="relative h-48 w-full mb-4">
                <Image
                  src={img.url}
                  alt={`${event.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            ))}
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-3 ">
              {event.description}
            </p>
            <Link
              href={`/dashboard/customer/event/${event.id}`}
              className="border border-black py-2 px-4 mt-4 inline-block text-sm"
            >
              Read more
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
