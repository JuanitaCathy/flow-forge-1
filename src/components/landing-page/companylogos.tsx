import Image from "next/image";
import acmeLogo from "../../assets/images/acme.png";
import apexLogo from "../../assets/images/apex.png";
import celestialLogo from "../../assets/images/celestial.png";
import echoLogo from "../../assets/images/echo.png";
import pulseLogo from "../../assets/images/pulse.png";
import quantumLogo from "../../assets/images/quantum.png";

export default function LogoCarousel() {
  const logos = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_0%,transparent_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,black_0%,transparent_100%)] after:content-['']">
      <div className="flex w-full">
        {/* First set of logos */}
        <div className="animate-infinite-scroll flex shrink-0 items-center justify-around gap-12 py-4">
          {logos.map((logo, index) => (
            <div key={index} className="w-[150px] max-w-[150px] flex items-center justify-center">
              <Image 
                src={logo.src} 
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set of logos for seamless scrolling */}
        <div className="animate-infinite-scroll flex shrink-0 items-center justify-around gap-12 py-4">
          {logos.map((logo, index) => (
            <div key={index} className="w-[150px] max-w-[150px] flex items-center justify-center">
              <Image 
                src={logo.src} 
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
