import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md text-black transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/assets/logo.svg" alt="" />
          </div>

          {/* Desktop Menu with glassy rounded div */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 px-6 py-2 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-yellow-500 transition-colors font-medium text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <Button className="hidden md:inline transition-elastic px-8 py-3 rounded-2xl font-bold glow-soft bg-[#FDDE51] text-black hover:shadow-card-hover">
            Get Started
          </Button>

          {/* Burger Menu Button - visible on mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2 bg-black" : "bg-black"
              }`}
            />
            <span
              className={`block h-0.5 w-full transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              } bg-black`}
            />
            <span
              className={`block h-0.5 w-full transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2 bg-black" : "bg-black"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/10 shadow-lg bg-white/90 text-black">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-yellow-500 font-semibold text-black"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <Button
              className="bg-[#FDDE51] hover:shadow-card-hover transition-elastic px-6 py-3 rounded-2xl font-bold glow-soft text-black"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

