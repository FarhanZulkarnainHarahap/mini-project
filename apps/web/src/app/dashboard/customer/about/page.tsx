import Header from "@/components/Header-section/header";
import { FaRocket, FaUsers, FaEye } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 animate-fade-up">
          About Us
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-up">
          We are passionate creators building the future of technology and
          innovation. Our mission is to deliver impactful digital experiences
          through creativity and precision.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-700 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
            <FaRocket className="text-4xl text-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-300">
              Empowering innovation and growth through scalable and modern web
              technologies.
            </p>
          </div>

          <div className="bg-gray-700 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
            <FaUsers className="text-4xl text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-300">
              We are a diverse group of developers, designers, and strategists
              who love solving problems.
            </p>
          </div>

          <div className="bg-gray-700 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
            <FaEye className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-300">
              To be the leading force in crafting digital experiences that shape
              the future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
