export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="text-center ml-4">
          2024 Flow Forge No rights are reserved
        </div>
        <ul className="flex justify-center gap-2.5">
          <li>
            <img
              src="../../assets/icons/x-social.svg"
              alt="X (formerly Twitter)"
              className="w-6 h-6"
            />
          </li>
          <li>
            <img
              src="../../assets/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </li>
          <li>
            <img
              src="../../assets/icons/insta.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </li>
          <li>
            <img
              src="../../assets/icons/youtube.svg"
              alt="YouTube"
              className="w-6 h-6"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
