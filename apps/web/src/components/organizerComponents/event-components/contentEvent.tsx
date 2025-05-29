"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "date-fns";

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
  category: string;
  createdAt: Date;
  imagePreview: ImageType[];
  imageContent: ImageType[];
  EventImage: [{ ImagePreview: { url: string } }];
  totalPages: number;
}
export default function ContentEventOrganizerSection() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function getAllEvent() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/event/");
        const data = await res.json();
        setEvents(data.data);
        console.log(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();
  }, []);
  return (
    <section className="border w-full h-full p-5 grid grid-rows-[auto_1fr] gap-y-3">
      <div className="grid grid-cols-[50px_100px_1fr_200px_150px_150px] text-center bg-gray-800 text-white font-semibold uppercase rounded-md overflow-hidden shadow-inner border border-gray-700">
        <div className="py-3 border-r border-gray-700">No.</div>
        <div className="py-3 border-r border-gray-700">Image</div>
        <div className="py-3 border-r border-gray-700">Title & Desc</div>
        <div className="py-3 border-r border-gray-700">Date & Location</div>
        <div className="py-3 border-r border-gray-700">Category</div>
        <div className="py-3">Created</div>
      </div>
      {events.map((event: EventType, index: number) => (
        <article
          key={event.id}
          className="grid grid-cols-[50px_100px_1fr_200px_150px_150px] text-center bg-gray-800/50 text-white rounded-md backdrop-blur-md border border-gray-700 shadow hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
        >
          {/* No. */}
          <div className="py-4 border-r border-gray-700 ">{index + 1}</div>

          {/* Image */}
          <div className="py-2 px-3 border-r border-gray-700 flex items-center justify-center">
            <div className="w-16 h-16 relative rounded overflow-hidden border border-gray-600">
              <Image
                src={event.imagePreview[0].url}
                alt="Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Title & Desc */}
          <div className="py-3 px-4 border-r border-gray-700 text-left">
            <p className="font-semibold text-white">{event.title}</p>
            <p className="text-sm text-gray-300 truncate">
              {event.description}
            </p>
          </div>

          {/* Date & Location */}
          <div className="py-4 border-r border-gray-700 text-left px-3">
            <p className="text-sm">
              <span className="font-medium text-gray-200">Start:</span>{" "}
              {format(new Date(event.startDate), "dd MMM yyyy")}
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-200">End:</span>{" "}
              {format(new Date(event.endDate), "dd MMM yyyy")}
            </p>
            <p className="text-sm text-indigo-300 mt-1">{event.location}</p>
          </div>

          {/* Category */}
          <div className="py-4 border-r border-gray-700">
            <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm">
              {event.category}
            </span>
          </div>

          {/* Created */}
          <div className="py-4 text-sm text-gray-300 grid place-items-center">
            <div>{format(new Date(event.createdAt), "dd MMM yyyy")}</div>
          </div>
        </article>
      ))}
    </section>
  );
}
