import AlertAddNewEventSection from "@/components/organizerComponents/event-components/addTable";
import { FaTrashCan } from "react-icons/fa6";
import HeaderOrganizer from "@/components/Header-section/header-organizer";
import ContentEventOrganizerSection from "@/components/organizerComponents/event-components/contentEvent";

export default function EventOrganizerPage() {
  return (
    <section>
      <HeaderOrganizer />
      <div className="min-h-screen bg-gray-100 w-full pt-20 p-8 relative overflow-hidden grid grid-rows-[auto_1fr] gap-5">
        {/* Kolom utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          <div>Events</div>

          {/* Kolom kanan */}
          <div className="grid items-start justify-items-end text-left bg-whit">
            <div className="grid grid-cols-2 gap-x-5">
              {/* Tombol Add */}
              <AlertAddNewEventSection />
              {/* Tombol Delete */}
              <div className="bg-red-500 w-fit p-2 rounded-md text-white grid grid-cols-[auto_1fr] place-items-center gap-x-3">
                <FaTrashCan color="white" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content event */}
        <div className="w-full pt-5 h-[100%]">
          <ContentEventOrganizerSection />
        </div>
      </div>
    </section>
  );
}
