import Image from "next/image";
import React from "react";
import bg from "../../../../public/background/projects-background.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import { Potion } from "@/components/models/potion";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="Imagem de Fundo"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <div className="flex items-center lg:ml-6 justify-center fixed top-16 lg:top-20 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 h-screen -z-10">
        <RenderModel preset="warehouse">
          <Potion />
        </RenderModel>
      </div>
      <ProjectList projects={projectsData} />
    </>
  );
}
