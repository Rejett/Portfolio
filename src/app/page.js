import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import RenderModel from "@/components/RenderModel";
import { PersonModel } from "@/components/models/person";
import Navigation from "@/components/navigation/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="Imagem de Fundo"
        fill
        className="-z-50 w-full h-screen object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        {/* Navigation and 3d Model*/}
        <Navigation />

        <RenderModel preset="sunset" lçl>
          <PersonModel />
        </RenderModel>
      </div>
    </main>
  );
}
