"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import EmojiImage from "../../assets/images/emojistar.png";
import HelixImage from "../../assets/images/helix2.png";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 flex items-center justify-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)]"
          />
        </motion.div>

        <h2 className="font-bold text-center text-5xl sm:text-6xl tracking-tighter">
          Smarter Workflows
        </h2>
        <p className="text-xl text-center text-white/70 mt-5">
          Simplify your GitHub workflow management with Flow Forge. Leverage
          Kestra for seamless orchestration and AI-powered automation to save
          time and boost productivity.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="example-email@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
