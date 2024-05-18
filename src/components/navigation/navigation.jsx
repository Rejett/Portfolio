"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Navigation() {
  const angleIncrement = (2 * Math.PI) / BtnList.length;

  const size = useScreenSize();

  const isLarge = size >= 1024;

  const isMedium = size >= 768 && size < 1024;

  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div variants={container} initial="hidden" animate="show">
              <div className="w-max flex items-center justify-between group relative animate-spin-slow hover:pause">
                {BtnList.map((btn, index) => {
                  const angleRad = index * angleIncrement;
                  const radius = isLarge
                    ? "calc(20vw - 1rem)"
                    : isMedium
                    ? "calc(10vw - 1rem)"
                    : "calc(40vw - 1rem)";
                  const x = `calc(50% + ${radius} * ${
                    Math.cos(angleRad) - 0.2
                  })`;
                  const y = `calc(50% + ${radius} * ${
                    Math.sin(angleRad) - 0.2
                  })`;
                  return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                })}
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-between group relative "
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} {...btn} />;
                })}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-between group relative "
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return (
                      <NavButton
                        key={btn.label}
                        labelDirection="left"
                        {...btn}
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
}
