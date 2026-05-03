export default function Reviews() {
  return (
    <div className="py-20 bg-gray-950 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">
        What Customers Say ⭐
      </h2>

      <p className="text-gray-400 text-center mb-12">
        Real feedback from happy customers
      </p>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-300">
            “The food was absolutely delicious and delivery was super fast!”
          </p>
          <h4 className="mt-4 font-semibold">— Ali Khan</h4>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-300">
            “Best restaurant experience ever. Highly recommended!”
          </p>
          <h4 className="mt-4 font-semibold">— Sara Ahmed</h4>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-300">
            “Amazing taste and great customer service. Will order again!”
          </p>
          <h4 className="mt-4 font-semibold">— John Smith</h4>
        </div>
      </div>
    </div>
  );
}
