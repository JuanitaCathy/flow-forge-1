"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <h2 className="text-center text-5xl font-bold tracking-tighter">
        Command Your Workflow
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-xl text-white/70 text-center mt-5">
          A powerful dashboard that puts GitHub automation at your fingertips.
          Create issues from templates, manage PRs, and get Discord
          notifications - all from one intuitive interface.
        </p>
      </div>
      <div className="flex justify-center">
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={"/thumbnail.png"}
            ref={appImage}
            width={1200}
            height={1200}
            alt="FlowForge dashboard interface"
            className="mt-14 rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};
