import React from 'react'
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
// import { easing } from "maath";
import HeroText from "../components/HeroText";

const Hero = () => {

  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space ">
      <HeroText />
      {/* <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
  
      </figure> */}
    </section>
  );
}

export default Hero;
