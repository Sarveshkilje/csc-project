import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row sm:items-center sm:gap-6">
      <li className="nav-li"><a className="nav-link" href="#home">Home</a></li>
      <li className="nav-li"><a className="nav-link" href="#about">About</a></li>
      <li className="nav-li"><a className="nav-link" href="#skills">Skills</a></li>
      <li className="nav-li"><a className="nav-link" href="#experience">Work</a></li>
      <li className="nav-li"><a className="nav-link" href="#contact">Contact</a></li>
      <li>
        <button className="px-5 py-2 border border-cyan-400 text-cyan-300 rounded-lg font-medium hover:bg-cyan-400/10 transition">
          Learn More
        </button>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 bg-[#0A1A2F] navbar-glow py-2">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          <a href="/" className="text-xl font-bold text-white">
            CSC-PHCET
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
