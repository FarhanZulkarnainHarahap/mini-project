import Header from "@/components/Header-section/header";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Header />
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-lg">This is the about page content.</p>
    </div>
  );
}
