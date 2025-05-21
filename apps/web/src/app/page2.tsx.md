"use client";
import { eventItems } from "@/app/data/eventItem";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EventPage() {
const { addToCart } = useCart();
const [selectedCategory, setSelectedCategory] = useState<string>("All");

// Ambil kategori unik dari data eventItems
const categories = [
"All",
...Array.from(new Set(eventItems.map((item) => item.category))),
];

// Filter berdasarkan kategori yang dipilih
const filteredEvents =
selectedCategory === "All"
? eventItems
: eventItems.filter((event) => event.category === selectedCategory);

return (

<div className="p-6 pt-32">
<h1 className="text-2xl font-bold mb-4">Event List</h1>

      {/* Dropdown kategori */}
      <div className="mb-6">
        <label htmlFor="category" className="mr-2 font-medium">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-1"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grid daftar event */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <Link href={`/event/${event.id}`}>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h2 className="text-xl font-semibold mt-3">{event.title}</h2>
              <p className="text-sm text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">Lokasi: {event.location}</p>
              <p className="text-sm text-gray-500">
                Tanggal: {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="mt-2 font-bold">
                Rp {event.harga.toLocaleString()}
              </p>
            </Link>
            <button
              onClick={() =>
                addToCart({
                  id: event.id,
                  title: event.title,
                  quantity: 1,
                  price: event.harga,
                })
              }
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Beli Tiket
            </button>
          </div>
        ))}
      </div>
    </div>

);
}
