import Header from "@/components/Header-section/header";

export default function ContactPage() {
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 pt-20">
        <div className="w-[80%] h-[90%] border">
          <h1 className="text-4xl font-bold mb-4">Contact Page</h1>
          <p className="text-lg">This is the contact page content.</p>
        </div>
      </div>
    </section>
  );
}
