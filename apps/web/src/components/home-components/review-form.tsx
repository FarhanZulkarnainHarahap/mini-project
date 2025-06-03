"use client";

import { useState } from "react";

interface ReviewFormProps {
  eventId: string;
}

export default function ReviewForm({ eventId }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!rating || !description) {
      alert("Rating dan komentar harus diisi.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/v1/event/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
          rating,
          eventId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal mengirim review");
      }

      alert("Review berhasil dikirim!");
      setRating(0);
      setDescription("");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-emerald-700 w-full h-fit rounded-xl p-4 grid gap-3">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(star)}
            className={`text-2xl ${
              (hoverRating || rating) >= star
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        placeholder="Tulis komentar Anda..."
        className="h-24 border-emerald-700 border p-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
          onClick={() => {
            setRating(0);
            setDescription("");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
