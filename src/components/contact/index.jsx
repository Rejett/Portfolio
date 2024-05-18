"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendEmail = (params) => {
    const toastId = toast.loading(
      "Os Ventos sussuram sua mensagem, por favor espere..."
    );
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "O mago foi Invocado, Por favor aguarde sua resposta!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error(
            "O mago não foi Invocado, Por favor tente novamente mais tarde!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Matheus Carmo",
      from_name: data.Nome,
      reply_to: data.Email,
      message: data.Menssagem,
    };

    console.log(templateParams);
    sendEmail(templateParams);
  };

  console.log(errors);

  return (
    <>
      <Toaster richColors />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-cenet space-y-4"
      >
        <input
          type="text"
          placeholder="Nome"
          {...register("Nome", {
            required: "Esse Campo é necessário!",
            minLength: {
              value: 3,
              message: "O Nome deve ter no mínimo 3 caracteres",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Nome && (
          <span className="inline-block self-start text-accent">
            {errors.Nome.message}
          </span>
        )}
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: "Esse Campo é necessário!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Email && (
          <span className="inline-block self-start text-accent">
            {errors.Email.message}
          </span>
        )}
        <textarea
          {...register("Menssagem", {
            required: "Esse Campo é necessário!",
            maxLength: {
              value: 256,
              message: "A Menssagem deve ter no máximo 256 caracteres",
            },
            minLength: {
              value: 50,
              message: "A Menssagem deve ter no mínimo 50 caracteres",
            },
          })}
          placeholder="Menssagem"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Menssagem && (
          <span className="inline-block self-start text-accent">
            {errors.Menssagem.message}
          </span>
        )}
        <input
          value="Conjure sua Mensagem!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-ponter capitalize"
          type="submit"
        />
      </form>
    </>
  );
}
