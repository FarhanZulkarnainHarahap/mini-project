"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FormAddEventSection from "./formaddevent";

export default function ShowAddNewEventSection() {
  const [showAdd, setShowAdd] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    EventImage: [
      {
        imagePreview: "",
        imageContent: "",
      },
    ],
  });
  const router = useRouter();

  // Handle image convert to base64
  const handleImagePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData((prev) => ({
          ...prev,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData((prev) => ({
          ...prev,
          imageContent: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/v1/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
        credentials: "include",
      });

      console.log(eventData);
      if (!res.ok) {
        throw new Error("Failed to Create Event");
      }

      alert("Create Event Success");

      setEventData({
        title: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        EventImage: [
          {
            imagePreview: "",
            imageContent: "",
          },
        ],
      });

      setShowAdd(false);
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

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
          <div className="bg-white p-8 rounded-lg w-[90%] md:w-[500px] shadow-xl relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <FormAddEventSection />

            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => {
                setShowAdd(false);
                setEventData({
                  title: "",
                  description: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  EventImage: [
                    {
                      imagePreview: "",
                      imageContent: "",
                    },
                  ],
                });
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
