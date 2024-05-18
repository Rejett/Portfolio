import Image from "next/image";
import React from "react";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Imagem de Fundo"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center  py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Invoque o Mago!
          </h1>
          <p className="text-center font-light text-xs sm:text-base">
            Adentre o círculo do encantamento e entrelace suas palavras no
            tecido do cosmos. Se busca conjurar colaborações, desvendar
            mistérios ou simplesmente compartilhar contos de aventura, suas
            mensagens são pergaminhos preciosos neste reino. Utilize o
            formulário abaixo para enviar suas mensagens através da rede etérea
            e aguarde o sussurro da magia em resposta.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
