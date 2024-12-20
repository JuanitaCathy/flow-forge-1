import acmeLogo from "../../assets/images/acme.png";
import apexLogo from "../../assets/images/apex.png";
import celestialLogo from "../../assets/images/celestial.png";
import echoLogo from "../../assets/images/echo.png";
import pulseLogo from "../../assets/images/pulse.png";
import quantumLogo from "../../assets/images/quantum.png";
import LogoCarousel from "./companylogos";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <h2 className="text-lg text-center text-white/70 mb-16">
        Trusted by world&apos;s most innovative teams
      </h2>
      <LogoCarousel />
    </div>
  );
};
