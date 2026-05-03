import { menu } from "../data/menuData";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Menu 🍽️</h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-300 mt-1">Rs {item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
