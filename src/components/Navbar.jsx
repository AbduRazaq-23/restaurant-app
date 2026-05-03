import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🧠 Scroll Spy (detect active section)
  useEffect(() => {
    const sections = ["home", "menu", "reservation", "reviews", "contact"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (name) =>
    `cursor-pointer transition ${
      active === name ? "text-red-400 font-bold" : "hover:text-red-400"
    }`;

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Foodie</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li onClick={() => handleClick("home")} className={linkClass("home")}>
            Home
          </li>

          <li onClick={() => handleClick("menu")} className={linkClass("menu")}>
            Menu
          </li>

          <li
            onClick={() => handleClick("reservation")}
            className={linkClass("reservation")}
          >
            Reservation
          </li>

          <li
            onClick={() => handleClick("reviews")}
            className={linkClass("reviews")}
          >
            Reviews
          </li>

          <li
            onClick={() => handleClick("contact")}
            className={linkClass("contact")}
          >
            Contact
          </li>

          {/* CTA */}
          <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600">
            Order Now
          </button>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 pb-6">
          <ul className="flex flex-col gap-4">
            <li onClick={() => handleClick("home")}>Home</li>
            <li onClick={() => handleClick("menu")}>Menu</li>
            <li onClick={() => handleClick("reservation")}>Reservation</li>
            <li onClick={() => handleClick("reviews")}>Reviews</li>
            <li onClick={() => handleClick("contact")}>Contact</li>

            <button className="bg-red-500 px-5 py-2 rounded-lg">
              Order Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
