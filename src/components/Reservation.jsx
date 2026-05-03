export default function Reservation() {
  return (
    <div className="py-20 bg-gray-950 flex justify-center items-center">
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-10 w-full max-w-2xl border border-gray-800">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Book a Table 🍽️
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Reserve your seat in seconds
        </p>

        {/* Form */}
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="date"
            className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="time"
            className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="number"
            placeholder="Guests"
            className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Button */}
        <button className="mt-8 w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          Reserve Now
        </button>

        {/* Small note */}
        <p className="text-center text-gray-500 text-sm mt-4">
          We will confirm your booking instantly ⚡
        </p>
      </div>
    </div>
  );
}
