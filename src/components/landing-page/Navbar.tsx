import { Workflow } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className=" bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md"></div>
              <Workflow className="h-10 w-10 inline-flex justify-center items-center rounded-lg" />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <img
                src="../../assets/icons/menu.svg"
                alt="Menu"
                className="text-white"
              />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a href="/sign-in">
                <button className="bg-white py-2 px-4 rounded-lg text-black">
                  Get started for free
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
