import { LucideGithub } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="text-center ml-4">
          2024 Flow Forge. All rights are reserved.
        </div>
        <ul className="flex justify-center gap-4 mr-8">
          <li>
            <a
              href="https://github.com/chiragagg5k/flow-forge"
              target="_blank"
              rel="noreferrer"
            >
              <LucideGithub className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
