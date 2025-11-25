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
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 bg-[#0A1A2F] py-2">
        
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-white"
          >
            CSC-PHCET
          </a>
                     {/* <div class="relative inline-block">
  <span class="absolute inset-0 m-auto w-50 h-10 rounded-full bg-white blur-2xl opacity-30 -z-10"></span>
</div> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
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
