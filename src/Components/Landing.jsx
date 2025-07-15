import { useState,useEffect } from 'react';
import moonImage from '../assets/Moon.png';


function Landing() {

  const titles = ["Full Stack Developer", "Software Engineer", "AI Engineer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];

    const typingSpeed = isDeleting ? 50 : 100;

    const updateText = () => {
      setDisplayText((prev) =>
        isDeleting
          ? currentTitle.substring(0, prev.length - 1)
          : currentTitle.substring(0, prev.length + 1)
      );
    };

    const timeout = setTimeout(() => {
      updateText();

      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, titles]);

  return (
    <section
      id="Landing"
      className="flex flex-col md:flex-row items-center justify-between px-6 pt-14 sm:pt-24 lg:pt-28 xl:pt-32 pb-16 max-w-6xl gap-12 mx-auto"
    >
      {/* Moon Image */}
      <div className="w-64 -mt-10 sm:w-64 md:w-2xl lg:w-[32rem] xl:w-[38rem] glowing-moon -mb-12">
    <img
      src={moonImage}
      alt="Moon"
      className="w-full h-auto drop-shadow-[0_0_24px_#A1F6FF]"
    />
</div>

      {/* Text Container */}
      <div className="text-center md:text-left text-textcolor px-6 max-w-xl space-y-5 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
      Hi <span className="inline-block animate-wave">👋</span>,<br />
      I'm <span className="text-secondary drop-shadow-[0_0_12px_#A1F6FF]">Anthony</span>,<br />
      <span className="text-white max-sm:text-2xl pr-1 relative">
        {displayText}
        <span className="absolute right-0 top-0 h-full w-[2px] bg-white blinking-cursor"></span>
      </span>

    </h1>

        <p className="text-sm md:text-md lg:text-lg leading-relaxed text-slate-300">
          I build intuitive full-stack applications and enjoy integrating AI to create smarter digital experiences.
          I’m a graduate of <span className="text-white font-medium whitespace-nowrap">De La Salle University – Dasmariñas</span> with a passion for web development and AI.
        </p>

        <div className="flex sm:flex-row pt-2 gap-4 sm:pt-4 justify-center md:justify-start flex-wrap">
          <a
            href="#Contacts"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-center border border-secondary text-secondary rounded-md text-xs sm:text-sm md:text-base hover:bg-secondary hover:text-primary transition whitespace-nowrap"
          >
            Contacts
          </a>
          <a
            href="https://drive.google.com/drive/folders/1RZZnGzu6ElpJEzHeV1dqkn1GNoK8hnla?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-center bg-secondary text-primary font-semibold rounded-md text-xs sm:text-sm md:text-base hover:brightness-110 transition whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
