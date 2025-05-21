"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AlertAddNewEventSection() {
  const [showAdd, setShowAdd] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    imagePreview: "",
    imageContent: "",
  });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/v1/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      alert("Login success");

      setEventData({
        title: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        imagePreview: "",
        imageContent: "",
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section>
      <button
        onClick={() => setShowAdd(true)}
        className="bg-emerald-600 w-fit p-2 rounded-md text-white grid grid-cols-[auto_1fr] place-items-center gap-x-3"
      >
        <FaPlus color="white" />
        <p>Add More Event</p>
      </button>
      {/* Show add */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
          <div className="bg-white p-8 rounded-lg w-[90%] md:w-[500px] shadow-xl relative">
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1">Event Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter event name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Location</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setSelectedImage(file);
                  }}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Preview (Opsional) */}
              {selectedImage && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
                  <div className="max-h-48 w-full shadow">
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      alt="Preview"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAdd(false);
                    setSelectedImage(null);
                  }}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Save
                </button>
              </div>
            </form>

            {/* Close Button */}
            <button
              onClick={() => {
                setShowAdd(false);
                setSelectedImage(null);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
