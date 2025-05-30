"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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
  totalPages: number;
}

export default function EventContentSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil page dan limit dari URL query, default ke 1 dan 2
  const pageParam = parseInt(searchParams.get("page") || "1");
  const limitParam = parseInt(searchParams.get("limit") || "8");

  const [page, setPage] = useState(pageParam);
  const [limit, setLimit] = useState(limitParam);
  const [events, setEvents] = useState<EventType[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  // Fungsi untuk pindah halaman dan update URL
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
      // Update query param di URL supaya bisa reload page dengan page baru
      router.replace(`?page=${pageNumber}&limit=${limit}`, { scroll: false });
    }
  };

  // Fetch ulang data setiap kali page atau limit berubah
  useEffect(() => {
    async function getAllEvent() {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/event?page=${page}&limit=${limit}`
        );
        const data = await res.json();
        setEvents(data.data);
        setTotalPages(data.totalPages);
        console.log("Fetched events:", data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();
  }, [page, limit]);

  return (
    <section className="w-[90%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 ">
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[60vh] p-6 rounded shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedEvent(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">{selectedEvent.title}</h2>
            <div className="grid gap-5">
              <div className="w-full overflow-x-auto scrollbar-hiden">
                <div className="flex w-full">
                  {selectedEvent.imagePreview.map((img) => (
                    <div
                      key={img.id}
                      className="relative w-full h-60 flex-shrink-0"
                    >
                      <Image
                        src={img.url}
                        alt={selectedEvent.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-800 whitespace-pre-line">
                <p>{selectedEvent.description}</p>
                <div>
                  <p>
                    {new Date(selectedEvent.startDate).toLocaleDateString(
                      "id-ID",
                      { day: "numeric", month: "long", year: "numeric" }
                    )}
                  </p>
                  <p>-</p>
                  <p>
                    {new Date(selectedEvent.endDate).toLocaleDateString(
                      "id-ID",
                      { day: "numeric", month: "long", year: "numeric" }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Cards */}
      {events.map((event: EventType) => (
        <article
          key={event.id}
          className="border rounded-2xl shadow-lg bg-white w-full h-full p-5 transition-transform hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="w-full overflow-x-auto scrollbar-hiden">
            <div className="flex gap-4 w-max">
              {event.imagePreview.map((img) => (
                <div
                  key={img.id}
                  className="relative min-w-[280px] h-44 flex-shrink-0 rounded-xl overflow-hidden hover:opacity-90 transition"
                  onClick={() => setSelectedEvent(event)}
                >
                  <Image
                    src={img.url}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="font-semibold text-xl mt-4 mb-1 text-gray-800 cursor-pointer hover:underline"
            onClick={() => setSelectedEvent(event)}
          >
            {event.title}
          </div>
          <div
            className="text-sm text-gray-600 cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            {event.description}
          </div>
        </article>
      ))}

      {/* Pagination */}
      <div className="col-span-full flex justify-center mt-10 gap-2">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded ${
              page === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
