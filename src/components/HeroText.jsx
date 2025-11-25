import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Web Developer", "Ui/Ux Desginer"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden lg:flex c-space">
        <motion.h1
          className="text-5xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Sarvesh
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Passionate
          </motion.p>
                              <FlipWords
              words={words}
              className="font-black text-white text-7xl"
            />
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
          </motion.div>
          <motion.p
            className="text-2xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            turning ideas into interactive realities.
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col mt-20 lg:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Sarvesh
        </motion.p>
        <div>
          <motion.p
            className="text-1xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Passionate
          </motion.p>
                               <FlipWords
              words={words}
              className="font-bold text-white text-4xl"
            />
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
          </motion.div>
          <motion.p
            className="text-1xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            create interactive UI.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
