export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
          alt="footer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Foodie</h2>
          <p className="text-gray-300">
            Serving delicious meals with love. Experience the best taste in
            town.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Reservation</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-300">📍 Peshawar, Pakistan</p>
          <p className="text-gray-300">📞 +92 306 5011190</p>
          <p className="text-gray-300">✉️ abdurazaq.dev23@gmail.com</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
          <p className="text-gray-300">Mon - Fri: 10 AM - 10 PM</p>
          <p className="text-gray-300">Sat - Sun: 12 PM - 12 AM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative text-center py-4 border-t border-gray-700 text-gray-400">
        © 2026 Foodie. All rights reserved.
      </div>
    </footer>
  );
}
