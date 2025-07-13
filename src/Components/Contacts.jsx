import github from '../assets/GitHub.png';
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'

function Contacts () {

    return(
    <section id="Contacts" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-textcolor mb-6">Contacts</h2>

        <div className="flex flex-col md:flex-row py-12 justify-center items-center md:items-start gap-15">

            {/* Get In Touch card */}
            <div className="relative w-40 h-56 bg-cards text-white rounded-xl flex flex-col items-center justify-center text-center border-5 border-secondary shadow-[0_0_16px_theme('colors.secondary')] -rotate-5 glowing-moon">
                {/* Email Icon */}
                <img src={mail} alt="Mail Icon" className="w-12 h-auto mb-10" />
  
                {/* Text */}
                <h2 className="text-2xl font-extrabold leading-tight">
                    Get In <br /> Touch!
                </h2>
            </div>

            <div className="w-md h-56">
                <p className="text-slate-400 text-center md:text-left max-w-xl mx-auto mb-10">Feel free to connect with me for collaborations, job opportunities, or just to chat!</p>

                <div className="space-y-4 text-center md:text-left">
                    <p><span className="font-semibold">Email:</span> ajoshuauc@gmail.com</p>
                    <p><span className="font-semibold">Phone:</span> +63 927 920 5056</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/ajoshuauc"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub Profile"
                            className="transition-transform hover:scale-110 hover:brightness-125"
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                            />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/anthony-cagampang/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn Profile"
                            className="transition-transform hover:scale-110 hover:brightness-125"
                        >
                            <img
                                src={linkedin}
                                alt="LinkedIn"
                                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    )
}

export default Contacts;