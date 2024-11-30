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
      className="bg-black text-white py-16 sm:py-24 flex flex-col items-center justify-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative flex flex-col items-center">
        <motion.div style={{ translateY }} className="w-full">
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)] sm:left-[calc(100%+20px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }} className="w-full">
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)] sm:right-[calc(100%+20px)]"
          />
        </motion.div>

        <h2 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl tracking-tighter">
          Smarter Workflows
        </h2>
        <p className="text-lg sm:text-xl text-center text-white/70 mt-5">
          Simplify your GitHub workflow management with Flow Forge. Leverage
          Kestra for seamless orchestration and AI-powered automation to save
          time and boost productivity.
        </p>
      </div>
    </div>
  );
};
