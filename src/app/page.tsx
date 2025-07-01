import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100 text-gray-900">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Jude Auto Repairs</h1>
        <p className="text-lg">Honest. Reliable. Affordable.</p>
      </header>

      <Image
        src="/mechanic.jpg" // Make sure you add this image to your public folder as /public/mechanic.jpg
        alt="Auto Repair"
        width={500}
        height={300}
        className="rounded-lg shadow-lg mb-8"
      />

      <section className="text-center max-w-2xl">
        <p className="mb-4">
          We specialize in engine diagnostics, oil changes, brake services, and full-service auto repair.
        </p>
        <p className="mb-4">
          Open Monday to Saturday · Call us: <strong>(555) 123-4567</strong>
        </p>
        <a
          href="mailto:info@judeautorepairs.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  );
}
