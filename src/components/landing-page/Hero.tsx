"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CursorImage from "../../assets/images/cursor.png";
import MessageImage from "../../assets/images/message.png";
import { useUser } from "../auth-provider";

export const Hero = () => {
  const user = useUser();

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="relative">
        <div className="flex items-center justify-center -mt-10"></div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tightner text-center inline-flex">
              Flow Forge
            </h1>
            <motion.div
              className="absolute right-[478px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={CursorImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Image
                src={MessageImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-lg sm:text-xl text-center mt-8 max-w-sm md:max-w-md">
            Streamline your GitHub workflow with FlowForge, automating{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              issue management
            </span>{" "}
            and{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              PR reviews
            </span>{" "}
            from one powerful dashboard.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          {user.current ? (
            <Link href={"/dashboard"}>
              <motion.button
                className="bg-white text-black py-3 px-5 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <motion.button
                className="bg-white text-black py-3 px-5 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
