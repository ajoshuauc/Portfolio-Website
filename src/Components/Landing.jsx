import moonImage from '../assets/Moon.png';

function Landing() {
  return (
    <section id="Landing" className="flex flex-col md:flex-row items-center justify-between px-6 pt-16 sm:pt-24 md:pt-30 lg:pt-33 xl:pt-20 pb-16 max-w-6xl gap-5 mx-auto">

      {/* Moon Image */}
      <div className="w-74 sm:w-64 md:w-2xl lg:w-[32rem] xl:w-[38rem] glowing-moon">
        <img
          src={moonImage}
          alt="Moon"
          className="w-full h-auto drop-shadow-[0_0_24px_#A1F6FF]"
        />
      </div>

      {/* Text Container */}
      <div className="text-center md:text-left text-textcolor px-6 max-w-xl space-y-5 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
          Hi <span className="inline-block animate-wave">👋</span>,<br />
          I'm <span className="text-secondary drop-shadow-[0_0_12px_#A1F6FF]">Anthony</span>,<br />
          <span className="text-white">Full Stack Engineer</span>
        </h1> 

        <p className="text-sm md:text-md lg:text-lg leading-relaxed text-slate-300">
          I create intuitive full-stack apps and love integrating AI into user-friendly experiences.
          I'm a graduate of <span className="text-white font-medium white-space-no">De La Salle University – Dasmariñas</span> and passionate about web development and AI.
        </p>

        <div className="flex gap-4 pt-4 justify-center md:justify-start">
          <a href="#Contacts" className="px-5 py-2 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-primary transition">
            Contacts
          </a>
          <a href="https://drive.google.com/drive/folders/1RZZnGzu6ElpJEzHeV1dqkn1GNoK8hnla?usp=sharing" target="_blank" rel="noreferrer" className="px-5 py-2 bg-secondary text-primary font-semibold rounded-md hover:brightness-110 transition">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
