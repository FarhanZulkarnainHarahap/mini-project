import Header from "@/components/Header-section/header";
import { FaCode, FaUserAstronaut, FaGlobe } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-full h-full border">
          <div className="bg-gray-900 text-white min-h-screen px-6 py-12">
            <div className="w-full mx-auto pt-20">
              {/* Header */}
              <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

              {/* Hero Section */}
              <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                {/* <div className="size-60 relative shadow-xl">
                        <Image src="" alt="About" fill className=" object-cover " />
                      </div> */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-2">
                    Hi, I'm a Passionate Developer
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    I specialize in building high-quality web applications with
                    a focus on performance, accessibility, and responsive
                    design. I enjoy bringing ideas to life in the browser.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition transform">
                  <FaCode className="text-3xl mx-auto mb-4 text-teal-400" />
                  <h3 className="text-xl font-semibold mb-2">Frontend Dev</h3>
                  <p className="text-gray-400 text-sm">
                    Building modern UIs with React, Tailwind, and more.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition transform">
                  <FaUserAstronaut className="text-3xl mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">
                    Creative Thinker
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Designing user-centric experiences and interfaces.
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition transform">
                  <FaGlobe className="text-3xl mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">Global Vision</h3>
                  <p className="text-gray-400 text-sm">
                    Thinking beyond code to deliver impactful solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
