"use client";

import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function FormAddEventSection() {
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
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Event Name</label>
          <input
            type="text"
            value={eventData.title}
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter event name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Start Date</label>
          <input
            type="date"
            value={eventData.startDate}
            onChange={(e) =>
              setEventData({ ...eventData, startDate: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">End Date</label>
          <input
            type="date"
            value={eventData.endDate}
            onChange={(e) =>
              setEventData({ ...eventData, endDate: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            value={eventData.location}
            onChange={(e) =>
              setEventData({ ...eventData, location: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            value={eventData.description}
            onChange={(e) =>
              setEventData({ ...eventData, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter description"
          />
        </div>
        {/* Image Preview */}
        <div>
          <label className="block font-semibold mb-1">
            Upload Image Preview
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreviewChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        {eventData.EventImage[0].imagePreview && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
            <div className="relative w-full h-48">
              <Image
                src={eventData.EventImage[0].imagePreview}
                alt="Preview"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        )}

        {/* Image Content */}
        <div>
          <label className="block font-semibold mb-1">
            Upload Image Content
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageContentChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        {eventData.EventImage[0].imageContent && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-1">Image Content:</p>
            <div className="relative w-full h-48">
              <Image
                src={eventData.EventImage[0].imagePreview}
                alt="Content"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        )}
        <div className="grid grid-rows-[auto_1fr] border py-5 rounded-2xl">
          <div className="pl-2">
            <p>Regular</p>
          </div>
          <div className="grid grid-rows-2 gap-y-3">
            <div className="grid grid-cols-[auto_1fr] items-center ">
              <div className="px-5 w-fit">
                <p className="">Price :</p>
              </div>
              <input className="border w-[50%]" />
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center ">
              <div className="px-5 w-fit">
                <p className="">Seat :</p>
              </div>
              <div className="pl-1">
                <input className="border lg:w-[100px] text-right" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-[auto_1fr] border py-5 rounded-2xl">
          <div className="pl-2">
            <p>VIP</p>
          </div>
          <div className="grid grid-rows-2 gap-y-3">
            <div className="grid grid-cols-[auto_1fr] items-center">
              <div className="px-5 w-fit">
                <p className="">Price :</p>
              </div>

              <input className="border w-[50%]" />
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center">
              <div className="px-5 w-fit">
                <p className="">Seat :</p>
              </div>
              <div className="pl-1">
                <input className="border lg:w-[100px] text-right" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-[auto_1fr] border py-5 rounded-2xl">
          <div className="pl-2">
            <p>VVIP</p>
          </div>
          <div className="grid grid-rows-2 gap-y-3">
            <div className="grid grid-cols-[auto_1fr] items-center">
              <div className="px-5 w-fit">
                <p className="">Price :</p>
              </div>
              <input className="border w-[50%]" />
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center ">
              <div className="px-5 w-fit">
                <p className="">Seat :</p>
              </div>
              <div className="pl-1">
                <input className="border lg:w-[100px] text-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
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
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
}
