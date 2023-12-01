"use client";

// import { secondFont } from "@/app/layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "tween" } },
  };

  return (
    <div className="bg-hero bg-cover w-screen h-screen bg-bottom flex justify-center items-center" id="home">
      <div className="px-6 lg:mb-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.h1 className={`font-secondFont sm:text-8xl text-5xl text-center`} variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <p>Walk through</p>
            <p>
              the world with <span className="line-through">Us</span>
            </p>
          </motion.h1>

          <motion.p className="max-w-xl text-center mt-2 mb-6 sm:text-base text-sm mx-auto font-medium" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            In a world where every structure tells a unique story, we redefine architectural excellence by crafting modern, imaginative buildings that
            push the skyline&apos;s boundaries. Elevate your surroundings with our innovative approach to design.
          </motion.p>

          <motion.div ref={ref} className="mx-auto w-fit" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <a href="#architectures" className="scroll-btn"></a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
