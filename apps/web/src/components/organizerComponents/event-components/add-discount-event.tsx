"use client";
// components/AddDiscountSection.tsx

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

interface Props {
  eventId: string;
  onClose: () => void;
}

export default function AddDiscountSection({ eventId, onClose }: Props) {
  const [discountPercent, setDiscountPercent] = useState("");
  const [validUntil, setValidUntil] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/v1/discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          eventId,
          discountPercent: parseInt(discountPercent),
          validUntil: new Date(validUntil),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Discount berhasil ditambahkan!");
        onClose();
      } else {
        alert("Gagal menambahkan discount: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-md w-full max-w-md relative">
        <button onClick={onClose} className="absolute right-4 top-4">
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold mb-4">Add Discount</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="number"
            name="discountPercent"
            placeholder="Discount (%)"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            className="border p-2 rounded text-black"
            required
          />
          <input
            type="datetime-local"
            name="validUntil"
            value={validUntil}
            onChange={(e) => setValidUntil(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
