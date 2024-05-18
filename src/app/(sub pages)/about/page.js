import Image from "next/image";
import React from "react";
import bg from "../../../../public/background/about-background.jpg";
import RenderModel from "@/components/RenderModel";
import { Helmet } from "@/components/models/helmet";
import AboutDetails from "@/components/about";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        alt="Imagem de Fundo"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 ">
        <RenderModel preset="park">
          <Helmet />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center mt-0 xs:mt-0 sm:mt-14 lg:mt-14">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent text-center">
            MatheusDev
          </h1>
          <p className="font-light text-foreground text-ls">
            Um portfólio Medieval para um dev Fullstack
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
