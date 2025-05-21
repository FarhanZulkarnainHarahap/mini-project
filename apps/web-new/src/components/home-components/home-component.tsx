import {
  FaTheaterMasks,
  FaSwimmer,
  FaGraduationCap,
  FaPlaneDeparture,
} from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";

export default function EventHomeSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-2 ">
      <h1 className="text-3xl font-bold ">Events</h1>
      <p className="text-lg">Welcome To The NexTime Journey</p>
      <div className="w-[80%] h-full px-25 grid lg:grid-cols-[auto_auto_auto_auto_auto] place-items-center md:grid-cols-3 border">
        <div className="bg-gray-400 rounded-full p-4 h-fit w-fit grid place-items-center">
          <FaTheaterMasks className="size-10 " />
          <p className="px-2">Theater</p>
        </div>

        <div className="bg-gray-400 rounded-full p-4 size-fit grid place-items-center">
          <FaSwimmer className="size-10" />
          <p className="px-2.5">Sports</p>
        </div>

        <div className="bg-gray-400 rounded-full p-4 h-fit w-fit grid place-items-center">
          <FaGraduationCap className="size-10" />
          <p>Academy</p>
        </div>
        <div className="bg-gray-400 rounded-full p-4 h-fit w-fit grid place-items-center">
          <GiMicrophone className="size-10" />
          <p>Concernt</p>
        </div>
        <div className="bg-gray-400 rounded-full p-4 h-fit w-fit grid place-items-center">
          <FaPlaneDeparture className="size-10" />
          <p className="px-2.5">Travel</p>
        </div>
      </div>
    </section>
  );
}
