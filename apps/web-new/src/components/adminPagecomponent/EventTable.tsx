"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaTrashCan } from "react-icons/fa6";
import { PiPencilDuotone } from "react-icons/pi";

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
  createdAt: string;
}

export default function EventsPage() {
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
    <main className="min-h-screen grid place-items-center">
      <section className="w-[90%] h-[90%]">
        {events.map((event: EventType) => (
          <article
            key={event.eventId}
            className="bg-white shadow-lg rounded p-4 border grid grid-cols-[auto_1fr_1fr_auto_auto] h-fit w-[90%] gap-4 place-content-between"
          >
            <div className="border-r h-full p-5">
              <div className="relative h-30 w-60">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            </div>
            <div className="border-r h-full p-2 grid place-items-center">
              <h2 className="text-xl font-bold h-full text-center">
                {event.title}
              </h2>
            </div>
            <div className="border-r h-full p-5 grid place-items-center">
              <p className="text-gray-600 text-sm h-full">
                {event.description}
              </p>
            </div>
            <div className="border-r h-full p-5">
              <p className="">{new Date(event.createdAt).toDateString()}</p>
            </div>
            <div className="h-full p-5">
              <div className="grid gap-5 h-full">
                <PiPencilDuotone />
                <FaTrashCan />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
