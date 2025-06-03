"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header-section/header";
import { motion } from "framer-motion";

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
  User?: { firstName: string; lastName: string }; // tambahkan jika diperlukan
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
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    getEventById();
  }, [params]);

  if (!events) {
    return (
      <section className="w-full h-screen flex justify-center items-center bg-gray-900 text-white">
        <p className="animate-pulse">Loading Event Details...</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <article className="w-full pt-24 p-4 max-w-7xl mx-auto grid gap-6">
        {/* Image Preview Slider */}
        {events.imagePreview?.length > 0 && (
          <div className="overflow-x-auto scrollbar-hide flex space-x-4 pb-4">
            {events.imagePreview.map((img) => (
              <motion.div
                key={img.id}
                className="relative min-w-[80vw] sm:min-w-[60vw] md:min-w-[40vw] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={img.url}
                  alt={events.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
        {/* Image Content Grid */}
        {events.imageContent?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.imageContent.map((img) => (
              <motion.div
                key={img.id}
                className="relative h-[200px] rounded-lg overflow-hidden border"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={img.url}
                  alt={events.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
        {/* Event Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-gray-900 rounded-xl shadow-lg p-6 space-y-4"
        >
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h1 className="text-3xl font-bold">{events.title}</h1>
            <div className="text-sm text-gray-500 self-end">
              {new Date(events.startDate).toLocaleDateString()} -{" "}
              {new Date(events.endDate).toLocaleDateString()}
            </div>
          </div>

          <div className="text-base">
            <span className="font-semibold text-gray-700">
              Diselenggarakan oleh:
            </span>{" "}
            {events.User
              ? `${events.User.firstName} ${events.User.lastName}`
              : "Tidak diketahui"}
          </div>

          <div className="text-gray-800 leading-relaxed border-t pt-4">
            {events.description}
          </div>
        </motion.div>
      </article>
    </section>
  );
}
