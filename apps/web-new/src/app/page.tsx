import Header from "@/components/Header-section/header";
import EventContentSection from "@/components/home-components/content-event-components";
import DiscountSection from "@/components/home-components/discount-coupont-components";
import EventHomeSection from "@/components/home-components/home-component";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="grid min-h-screen w-full">
        <div className=" w-full h-full grid gap-y-2 place-items-center">
          <div className="relative w-full min-h-screen bg-black grid place-items-center">
            <p className="text-white">Hello</p>
          </div>
          <EventHomeSection />
          <EventContentSection />d
          <DiscountSection />
          <div className="h-full">Ok</div>
        </div>
      </div>
    </main>
  );
}
