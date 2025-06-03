import Header from "@/components/Header-section/header";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center text-gray-300 mb-12">
          Feel free to reach out anytime. We’re happy to hear from you!
        </p>

        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4 text-xl">
            <FaPhoneAlt className="text-green-400" />
            <span>0819-5816-9283</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl">
            <FaEnvelope className="text-blue-400" />
            <span>farhanzulkarnaenhrp@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Indonesia</span>
          </div>
        </div>
      </section>
    </div>
  );
}
