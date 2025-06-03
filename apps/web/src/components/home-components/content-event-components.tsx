"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ReviewForm from "./review-form";

interface ImageType {
  id?: string;
  url: string;
}
enum ListCategory {
  NONE = "NONE",
  THEATER = "THEATER",
  SPORTS = "SPORTS",
  ACADEMY = "ACADEMY",
  CONCERNT = "CONCERNT",
  TRAVEL = "TRAVEL",
}

interface ReviewType {
  userId: string;
  description: string;
  rating: number;
  createdAt: Date;
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
  Review: ReviewType[];
  EventImage: { ImagePreview: { url: string } }[];
  totalPages: number;
  Ticket: { id: string; ticketType: string; price: number }[];
  Category: { categoryId: string; category: ListCategory };
}

export default function EventContentSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = parseInt(searchParams.get("page") || "1");
  const limitParam = parseInt(searchParams.get("limit") || "8");
  const titleParam = searchParams.get("title") || "";
  const categoryParam = searchParams.get("title") || "";

  const [page, setPage] = useState(pageParam);
  const [limit, setLimit] = useState(limitParam);
  const [title, setTitle] = useState(titleParam);
  const [category, setCategory] = useState(categoryParam);
  const [events, setEvents] = useState<EventType[]>([]);
  const [debouncedTitle, setDebouncedTitle] = useState<EventType[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
      router.replace(
        `?page=${pageNumber}&limit=${limit}&title=${debouncedTitle}&category=${category}`,
        { scroll: false }
      );
    }
  };

  const handlePay = async () => {
    if (!selectedEvent || !selectedTicket) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/v1/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: selectedEvent.id,
          ticketId: selectedTicket,
          totalTicket: quantity,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Transaksi berhasil. Redirecting ke Midtrans...");
        window.location.href = data.data.midtransTransaction.redirect_url;
      } else {
        alert(data.message || "Transaksi gagal");
      }
    } catch (error) {
      console.error("Error creating transaction:", error);
      alert("Terjadi kesalahan saat membuat transaksi");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTitle(title);
      setPage(1); // Reset to first page when search changes
      router.replace(`?page=1&limit=${limit}&title=${title}`, {
        scroll: false,
      });
    }, 500); // 500ms debounce

    return () => clearTimeout(timeout);
  }, [title]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCategory(category);
      setPage(1); // Reset to first page when search changes
      router.replace(`?page=1&limit=${limit}&title=${category}`, {
        scroll: false,
      });
    }, 500); // 500ms debounce

    return () => clearTimeout(timeout);
  }, [category]);

  useEffect(() => {
    async function getAllEvent() {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/event?page=${page}&limit=${limit}&title=${debouncedTitle}&category=${category}`
        );
        const data = await res.json();
        setEvents(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    getAllEvent();
  }, [page, limit, debouncedTitle, category]);

  return (
    <section className="w-[90%] h-auto p-5">
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm grid place-items-center z-50 border">
          <div className="grid grid-cols-[1fr_auto] place-items-center gap-4">
            <div className="bg-white w-[60vh] p-6 rounded shadow-lg relative border">
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
                  <div className="grid grid-cols-[auto_auto_1fr] gap-x-2">
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

                {/* Dropdown Ticket Type */}
                <div className="mb-4">
                  <label
                    htmlFor="ticket-type"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Pilih Jenis Tiket
                  </label>
                  <select
                    id="ticket-type"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedTicket || ""}
                    onChange={(e) => setSelectedTicket(e.target.value)}
                  >
                    <option value="" disabled>
                      Pilih jenis tiket
                    </option>
                    {selectedEvent.Ticket.map((ticket) => (
                      <option key={ticket.id} value={ticket.id}>
                        {ticket.ticketType} - Rp{ticket.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity and Payment Button */}
                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl shadow-sm w-fit px-2 py-1">
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  >
                    –
                  </button>
                  <span className="min-w-[2rem] text-center font-medium text-gray-800">
                    {quantity}
                  </span>
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>

                  <button
                    onClick={handlePay}
                    disabled={loading || !selectedTicket}
                    className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded disabled:opacity-50"
                  >
                    {loading ? "Memproses..." : "BAYAR"}
                  </button>
                </div>
              </div>
            </div>

            {/* Form Review */}
            <div className="bg-white w-[50vh] p-4 rounded shadow-lg relative border h-full overflow-auto">
              <ReviewForm />
            </div>
          </div>
        </div>
      )}

      <input
        type="text"
        value={title}
        placeholder="🔍 Search events here.."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        className="py-2 mb-8 border-2 border-white rounded-lg px-5 w-[50%] mx-auto"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-[200px] p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Semua Kategori</option>
        <option value="THEATER">Theater</option>
        <option value="SPORTS">Sports</option>
        <option value="ACADEMY">Academy</option>
        <option value="CONCERNT">Concert</option>
        <option value="TRAVEL">Travel</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {/* Event Cards */}
        {events.map((event: EventType) => (
          <article
            key={event.id}
            className="border rounded-2xl shadow-lg bg-white w-full h-full p-5 transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="w-full overflow-x-auto scrollbar-hidden">
              <div className="flex gap-4 w-max">
                {event.imagePreview.map((img) => (
                  <div
                    key={img.id}
                    className="relative min-w-[240px] h-44 flex-shrink-0 rounded-xl overflow-hidden hover:opacity-90 transition"
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
      </div>
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
