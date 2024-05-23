"use client";
import React from "react";
import ItemLayout from "./itemLayout";
export default function AboutDetails() {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Desenvolvedor Fullstack Jr.
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Desenvolvedor Fullstack Jr. com experiência em sistemas financeiros
            e soluções de pagamento, além de operações e suporte a aplicações em
            produção. Habilidade comprovada no desenvolvimento e manutenção de
            sistemas complexos utilizando tecnologias modernas como React,
            Next.js e Nest.js, TypeScript, Node.js, HTML, CSS, TailwindCSS,
            ES6+, manipulação do DOM e versionamento de código com Git e GitHub.
            Possuo Experiência e familiaridade com sistemas utilizando Docker,
            PostgreSQL, Cassandra, MongoDB, SQL, AWS e Kafka, Java, com
            arquitetura de sistemas em micro-serviços, e mono Repos aplicação de
            Clean Code e desenvolvimento de APIs REST. Forte capacidade de
            colaborar com equipes multifuncionais para entregar produtos de alta
            qualidade dentro dos prazos estabelecidos. Comunicação eficaz,
            trabalho em equipe, resolução de problemas, gestão de tempo,
            adaptabilidade
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full lg:col-span-4 text-accent"}>
          <p className="font-bold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base"> Clientes</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full lg:col-span-4 text-accent"}>
          <p className="font-bold w-full text-left text-2xl sm:text-5xl">
            2+
            <sub className="font-semibold text-base"> Anos de Experiencia</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full lg:col-span-4 !p-0">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rejett&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
            alt="Matheus Carmo"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className=" col-span-full sm:col-span-6 lg:col-span-8 !p-0">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=rejett&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
            alt="Matheus Carmo"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,react,git,github,gitlab,docker,kubernetes,aws,bootstrap,cassandra,elasticsearch,express,firebase,figma,gradle,androidstudio,java,maven,kafka,linux,mongodb,mysql,nestjs,nextjs,nodejs,npm,yarn,postman,py,redux,styledcomponents,ts,ubuntu,vite"
            alt="Matheus Carmo"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className=" col-span-full sm:col-span-6 !P-0">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=rejett&theme=dark&hide_border=true&locale=pt_BR&type=png&background=FEFE5B00&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-6 !p-0">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=rejett&repo=foodpay&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
            alt="Matheus Carmo"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
}
