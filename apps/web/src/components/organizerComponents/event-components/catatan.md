"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { FaPlus, FaTimes } from "react-icons/fa";

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
Ticket: { id: string }[];
}

export default function ContentEventOrganizerSection() {
const [events, setEvents] = useState<EventType[]>([]);
const [showAdd, setShowAdd] = useState(false); // Global modal control
const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
const [formData, setFormData] = useState({
ticketType: "",
description: "",
code: "",
discountPercent: "",
maxUses: "",
validUntil: "",
eventId: "",
ticketId: "",
});

useEffect(() => {
async function getAllEvent() {
try {
const res = await fetch("http://localhost:8000/api/v1/event");
const data = await res.json();
setEvents(data.data);
} catch (error) {
console.error("Error fetching events:", error);
}
}
getAllEvent();
}, []);

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
try {
const res = await fetch("http://localhost:8000/api/v1/voucher", {
method: "POST",
headers: { "Content-Type": "application/json" },
credentials: "include",
body: JSON.stringify(formData),
});

      const data = await res.json();

      if (res.ok) {
        alert("Voucher berhasil ditambahkan!");
        setShowAdd(false);
        setFormData({
          ticketType: "",
          description: "",
          code: "",
          discountPercent: "",
          maxUses: "",
          validUntil: "",
          eventId: "",
          ticketId: "",
        });
      } else {
        alert("Gagal menambahkan voucher: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim data.");
    }

};

return (

<section className="relative border w-full h-full p-5 grid grid-rows-[auto_1fr] gap-y-3">
{/_ Global Pop-up Modal ADD NEW VOUCHER _/}
{showAdd && (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
<div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
<button
onClick={() => setShowAdd(false)}
className="absolute top-3 right-3 text-gray-500 hover:text-red-500" >
<FaTimes />
</button>
<h2 className="text-xl font-bold mb-4">Add New Voucher</h2>
<form onSubmit={handleSubmit} className="grid gap-4">
<select
value={formData.ticketType}
onChange={(e) => {
setFormData({
...formData,
ticketType: e.target.value,
ticketId:
e.target.value === "REGULAR"
? selectedEvent?.Ticket[0].id
: e.target.value === "VIP"
? selectedEvent?.Ticket[1].id
: selectedEvent?.Ticket[2].id,
});
}}
className="w-full border p-2 rounded" >
<option value="" disabled>
PICK TYPE
</option>
<option value="REGULAR">REGULAR</option>
<option value="VIP">VIP</option>
<option value="VVIP">VVIP</option>
</select>
<textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border p-2 rounded-md text-black"
                required
              />
<input
                type="text"
                name="code"
                placeholder="Voucher Code"
                value={formData.code}
                onChange={handleChange}
                className="border p-2 rounded-md text-black"
                required
              />
<input
                type="number"
                name="discountPercent"
                placeholder="Discount (%)"
                value={formData.discountPercent}
                onChange={handleChange}
                className="border p-2 rounded-md text-black"
                required
                min={1}
                max={100}
              />
<input
                type="number"
                name="maxUses"
                placeholder="Max Uses"
                value={formData.maxUses}
                onChange={handleChange}
                className="border p-2 rounded-md"
                required
                min={1}
              />
<input
                type="datetime-local"
                name="validUntil"
                value={formData.validUntil}
                onChange={handleChange}
                className="border p-2 rounded-md"
                required
              />
<button
                type="submit"
                className="bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
              >
Submit
</button>
</form>
</div>
</div>
)}

      {/* Header Table */}
      <div className="grid grid-cols-[50px_100px_1fr_200px_150px_150px_150px] text-center bg-gray-800 text-white font-semibold uppercase rounded-md overflow-hidden shadow-inner border border-gray-700">
        <div className="py-3 border-r border-gray-700">No.</div>
        <div className="py-3 border-r border-gray-700">Image</div>
        <div className="py-3 border-r border-gray-700">Title & Desc</div>
        <div className="py-3 border-r border-gray-700">Date & Location</div>
        <div className="py-3 border-r border-gray-700">Category</div>
        <div className="py-3 border-r border-gray-700">Created</div>
        <div className="py-3">Voucher</div>
      </div>

      {/* Table Body */}
      {events.map((event, index) => (
        <article
          key={event.id}
          className="grid grid-cols-[50px_100px_1fr_200px_150px_150px_150px] text-center bg-gray-800/50 text-white rounded-md backdrop-blur-md border border-gray-700 shadow hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
        >
          <div className="py-4 border-r border-gray-700">{index + 1}</div>
          <div className="py-2 px-3 border-r border-gray-700 flex items-center justify-center">
            <div className="w-16 h-16 relative rounded overflow-hidden border border-gray-600">
              <Image
                src={event.imagePreview[0]?.url || "/default.png"}
                alt="Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-3 px-4 border-r border-gray-700 text-left">
            <p className="font-semibold">{event.title}</p>
            <p className="text-sm text-gray-300 truncate">
              {event.description}
            </p>
          </div>
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
          <div className="py-4 border-r border-gray-700">
            <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm">
              {event.category}
            </span>
          </div>
          <div className="py-4 border-r border-gray-700 text-sm text-gray-300 grid place-items-center">
            <div>{format(new Date(event.createdAt), "dd MMM yyyy")}</div>
          </div>
          <div className="p-2 py-10 text-sm text-gray-400">
            <button
              onClick={() => {
                setSelectedEvent(event);
                setFormData((prev) => ({ ...prev, eventId: event.id }));
                setShowAdd(true);
              }}
              className="bg-emerald-600 w-fit p-2 rounded-md text-white grid grid-cols-[auto_1fr] place-items-center gap-x-3"
            >
              <FaPlus color="white" />
              <p>Add Voucher</p>
            </button>
          </div>
        </article>
      ))}
    </section>

);
}
