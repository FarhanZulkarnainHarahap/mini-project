"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Header from "@/components/Header-section/header";

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

export default function EventDetailClientPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const [events, setEvents] = useState<EventType | null>(null);

  useEffect(() => {
    async function getEventById() {
      try {
        const { eventId } = await params;
        const res = await fetch(
          `http://localhost:8000/api/v1/event/${eventId}`
        );
        const data = await res.json();
        setEvents(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    getEventById();
  }, [params]);

  if (!events) {
    return <p>Loading...</p>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-800">
      <Header />
      <article className="w-full pt-20 border p-2 grid grid-rows-[1fr_auto]">
        <div className="w-full p-2 grid grid-rows-[1fr_auto] gap-y-4 h-fit">
          <div className="w-full overflow-x-auto h-fit scrollbar-hide">
            {events.imagePreview?.length > 0 && (
              <div className="flex space-x-4 py-4 w-max">
                {events.imagePreview.map((img) => (
                  <div
                    key={img.id}
                    className="relative min-w-full h-[300px] sm:h-[400px] md:h-[500px] flex-shrink-0"
                  >
                    <Image
                      src={img.url}
                      alt={events.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-full overflow-x-auto h-fit scrollbar-hide">
            {events.imageContent?.length > 0 && (
              <div className="w-full  flex space-x-4 py-4">
                {events.imageContent?.map((img) => (
                  <div
                    key={img.id}
                    className="relative w-[40vh] h-[30vh] sm:h-[50vh] md:h-[30vh] lg:h-[30vh] border flex-shrink-0"
                  >
                    <Image
                      src={img.url}
                      alt={events.title}
                      fill
                      className="object-cover rounded-b-md"
                      sizes="(max-width: 768px) 80vw, "
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="p-6 bg-white text-black rounded-xl shadow-md border w-full mx-auto space-y-4">
          {/* Judul + Tanggal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h1 className="text-3xl font-bold">{events.title}</h1>
            <p className="text-sm text-gray-500"></p>
          </div>

          {/* Nama Pengguna */}
          <div className="text-base text-gray-700">
            <span className="font-medium">Diselenggarakan oleh:</span>{" "}
            {`${events.User?.firstName} ${events.User?.lastName}`}
          </div>

          {/* Deskripsi */}
          <div className="text-gray-800 leading-relaxed border-t pt-4">
            {events.description}
          </div>
        </div>
      </article>
    </section>
  );
}
