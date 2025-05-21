"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface EventType {
  id: string;
  userId: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  EventImage: [{ ImagePreview: { url: string } }];
}

export default function ContentEventOrganizerSection() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    async function getAllEvent() {
      try {
        const res = await fetch("http://localhost:8000/api/v1/event/");
        const data = await res.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();
  }, []);
  return (
    <section className="border w-full h-full p-5 grid grid-rows-[auto_1fr] gap-y-3">
      <div className="grid grid-cols-[auto_auto_1fr_auto_auto] text-center">
        <div className="border h-fit px-2">No.</div>
        <div className="border h-fit w-45.5">Image</div>
        <div className="border h-fit w-full">Title</div>
        <div className="border h-fit px-20">Category</div>
        <div className="border h-fit px-5">Create Time</div>
      </div>
      {events.map((event: EventType) => (
        <article
          key={event.id}
          className="grid grid-cols-[auto_auto_1fr_auto_auto] text-center h-fit"
        >
          <div className="border h-full px-2">No.</div>
          <div className="border h-full p-5 w-[100%]">
            <div className="size-35 relative">
              <Image src={event.EventImage[0]?.ImagePreview?.url} alt="" fill />
            </div>
          </div>
          <div className="border h-full w-full">
            <p>{event.title}</p>
            <p>{event.description}</p>
          </div>
          <div className="border h-full px-20">Category</div>
          <div className="border h-full px-5">{event.createdAt}</div>
        </article>
      ))}
    </section>
  );
}
