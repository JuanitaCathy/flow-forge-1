"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const items = [
  {
    question: "What is Flow Forge?",
    answer:
      "Flow Forge is a GitHub workflow manager that simplifies project management by integrating with tools like Kestra for workflow management and leveraging AI for automation. It enables you to automate tasks like issue creation, pull request reviews, and notifications.",
  },
  {
    question: "How does Kestra enhance workflow management in Flow Forge?",
    answer:
      "Kestra acts as the backbone of workflow orchestration in Flow Forge. It allows you to define, monitor, and optimize complex workflows, ensuring seamless integration with your repositories and team processes.",
  },
  {
    question: "What AI-powered features does Flow Forge offer?",
    answer:
      "Flow Forge uses AI to automate repetitive tasks, analyze pull requests for improvements, and suggest optimized workflows based on your project data. This helps teams save time and improve efficiency.",
  },
  {
    question: "Can I customize the workflow templates?",
    answer:
      "Yes, Flow Forge supports fully customizable templates for issues, pull requests, and notifications, giving your team the flexibility to adapt workflows to specific needs.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black">
      <h2 className="text-4xl sm:text-5xl md:text-6xl sm:w-[648px] font-bold mx-auto text-center text-white tracking-tighter">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 sm:mt-12 max-w-[90%] sm:max-w-[648px] mx-auto">
        {items.map(({ question, answer }) => (
          <AccordinationItem
            question={question}
            answer={answer}
            key={question}
          />
        ))}
      </div>
    </div>
  );
};
