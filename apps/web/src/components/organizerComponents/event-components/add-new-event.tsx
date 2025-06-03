"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function AddNewEventSection() {
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);
  const [contentFiles, setContentFiles] = useState<File[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",

    imagePreviewData: [] as string[],
    imageContentData: [] as string[],
    JSONTickets: {
      reguler: { price: "", seat: "" },
      VIP: { price: "", seat: "" },
      VVIP: { price: "", seat: "" },
    },
  });
  const router = useRouter();

  // Handle image convert to base64
  const handleImagePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEventData((prev) => ({
            ...prev,
            imagePreviewData: [
              ...prev.imagePreviewData,
              reader.result as string,
            ],
          }));
          setPreviewFiles((prev) => [...prev, file]); // Add original file
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleImageContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEventData((prev) => ({
            ...prev,
            imageContentData: [
              ...prev.imageContentData,
              reader.result as string,
            ],
          }));
          setContentFiles((prev) => [...prev, file]); // Add original file
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleTicketChange = (
    type: "reguler" | "VIP" | "VVIP",
    field: "price" | "seat",
    value: string
  ) => {
    setEventData((prev) => ({
      ...prev,
      JSONTickets: {
        ...prev.JSONTickets,
        [type]: {
          ...prev.JSONTickets[type],
          [field]: value,
        },
      },
    }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("description", eventData.description);
    formData.append("location", eventData.location);
    formData.append("startDate", eventData.startDate);
    formData.append("endDate", eventData.endDate);
    formData.append("category", "SPORTS");

    previewFiles.forEach((file) => {
      formData.append("imagePreview", file); // ✅ key = imagePreview
    });

    contentFiles.forEach((file) => {
      formData.append("imageContent", file); // ✅ key = imageContent
    });

    // Append tickets as JSON string
    formData.append(
      "JSONTickets",
      JSON.stringify({
        reguler: {
          price: Number(eventData.JSONTickets.reguler.price),
          seat: Number(eventData.JSONTickets.reguler.seat),
        },
        VIP: {
          price: Number(eventData.JSONTickets.VIP.price),
          seat: Number(eventData.JSONTickets.VIP.seat),
        },
        VVIP: {
          price: Number(eventData.JSONTickets.VVIP.price),
          seat: Number(eventData.JSONTickets.VVIP.seat),
        },
      })
    );

    try {
      const res = await fetch("http://localhost:8000/api/v1/event", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create event");

      alert("Event created!");
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
                  <label className="block font-semibold mb-1">
                    Description
                  </label>
                  <textarea
                    value={eventData.description}
                    onChange={(e) =>
                      setEventData({
                        ...eventData,
                        description: e.target.value,
                      })
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
                    multiple
                  />
                </div>
                {eventData.imagePreviewData && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
                    <div className="relative w-full h-48">
                      <Image
                        src={eventData.imagePreviewData[0]}
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
                    multiple
                  />
                </div>
                {eventData.imageContentData && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-1">Image Content:</p>
                    <div className="relative w-full h-48">
                      <Image
                        src={eventData.imageContentData[0]}
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
                      <input
                        type="number"
                        value={eventData.JSONTickets.reguler.price}
                        onChange={(e) =>
                          handleTicketChange("reguler", "price", e.target.value)
                        }
                        className="border w-[50%]"
                      />
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center ">
                      <div className="px-5 w-fit">
                        <p className="">Seat :</p>
                      </div>
                      <div className="pl-1">
                        <input
                          type="number"
                          value={eventData.JSONTickets.reguler.seat}
                          onChange={(e) =>
                            handleTicketChange(
                              "reguler",
                              "seat",
                              e.target.value
                            )
                          }
                          className="border lg:w-[100px] text-right"
                        />
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

                      <input
                        type="number"
                        value={eventData.JSONTickets.VIP.price}
                        onChange={(e) =>
                          handleTicketChange("VIP", "price", e.target.value)
                        }
                        className="border w-[50%]"
                      />
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center">
                      <div className="px-5 w-fit">
                        <p className="">Seat :</p>
                      </div>
                      <div className="pl-1">
                        <input
                          type="number"
                          value={eventData.JSONTickets.VIP.seat}
                          onChange={(e) =>
                            handleTicketChange("VIP", "seat", e.target.value)
                          }
                          className="border lg:w-[100px] text-right"
                        />
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
                      <input
                        type="number"
                        value={eventData.JSONTickets.VVIP.price}
                        onChange={(e) =>
                          handleTicketChange("VVIP", "price", e.target.value)
                        }
                        className="border w-[50%]"
                      />
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center ">
                      <div className="px-5 w-fit">
                        <p className="">Seat :</p>
                      </div>
                      <div className="pl-1">
                        <input
                          type="number"
                          value={eventData.JSONTickets.VVIP.seat}
                          onChange={(e) =>
                            handleTicketChange("VVIP", "seat", e.target.value)
                          }
                          className="border lg:w-[100px] text-right"
                        />
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
                        imagePreviewData: [] as string[],
                        imageContentData: [] as string[],
                        JSONTickets: {
                          reguler: { price: "", seat: "" },
                          VIP: { price: "", seat: "" },
                          VVIP: { price: "", seat: "" },
                        },
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
                  imagePreviewData: [] as string[],
                  imageContentData: [] as string[],
                  JSONTickets: {
                    reguler: { price: "", seat: "" },
                    VIP: { price: "", seat: "" },
                    VVIP: { price: "", seat: "" },
                  },
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
