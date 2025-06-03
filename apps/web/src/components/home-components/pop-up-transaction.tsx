"use client";

import { useEffect, useState } from "react";

interface ImageType {
  id?: string;
  url: string;
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
}
export default function PopUpTransactionEvent() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formDataTransaction, setFormDataTransaction] = useState({
    eventId: "",
    userId: "",
    ticketId: "",
    ticketType: "",
    voucherId: "",
    kode: "",
    discountId: "",
    status: "",
    totalPrice: "", // in IDR
    totalTicket: "",
  });
  useEffect(() => {
    const myMidtransClientKey =
      process.env.NEXT_PUBLIC_MIDTRANS_SANDBOX_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", myMidtransClientKey as string);

    document.body.appendChild(script);
  }, []);

  async function handlePay(e: React.FormEvent) {
    if (!selectedEvent || !selectedTicket) return;

    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/v1/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataTransaction),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Transaksi berhasil. Redirecting ke Midtrans...");
        console.log(data);
        window.snap.embed(data.data.midtransTransaction.token, {
          embedId: "snap-container",
        });
      } else {
        alert(data.message || "Transaksi gagal");
        return;
      }
    } catch (error) {
      console.error("Error creating transaction:", error);
      alert("Terjadi kesalahan saat membuat transaksi");
    }
  }

  return (
    <section>
      {/* Dropdown Ticket Type */}
      <div className="mb-4">
        <form
          onSubmit={(e) => handlePay(e)}
          className="grid grid-rows-2 gap-4"
        >

       
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
          onChange={(e) =>
            setFormDataTransaction({
              ...formDataTransaction,
              ticketType: e.target.value,
              ticketId:
                e.target.value === "REGULAR"
                  ? selectedEvent?.Ticket[0].id
                  : e.target.value === "VIP"
                    ? selectedEvent?.Ticket[1].id
                    : selectedEvent?.Ticket[2].id,
            })
          }
          className="w-full border p-2 rounded"
        >
          <option value="" disabled>
            Pilih jenis tiket
          </option>
          {selectedEvent?.Ticket.map((ticket) => (
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
       </form>
    </section>
  );
}
