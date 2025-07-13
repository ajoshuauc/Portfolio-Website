import peered from '../assets/Peered_Icon.png'
import gachagame from '../assets/GachaGame.png'
import connect4 from '../assets/Connect4.png'
import websitePortfolio  from '../assets/websitePortfolio.png'
import git from '../assets/GitHub.png'


const projects = [
    {
        name: 'Peered',
        description: 'A chrome extension that censors sensitive text and images on social media using DistilBERT and YOLOv8n/MobileNetV2 for real-time AI content moderation, integrated with Chrome Extensions APIs for seamless automation.',
        source: peered,
        technologies: ['Python', 'Tensorflow', 'Chrome API'],
        livePreview: 'https://chromewebstore.google.com/detail/peered/dnccbjakelpbgieoobnjekbmnjnljjia',
        code: 'https://github.com/ajoshuauc/PEERED-DETECTING-AND-CATEGORIZING-PEER-PRESSURE-IN-SOCIAL-MEDIA-USING-MULTI-CLASS-CLASSIFICATION',
    },
    {
        name: 'Website Portfolio',
        description: 'This website you are currently viewing. A responsive personal portfolio built with React and Tailwind CSS. Features smooth scrolling, interactive animations, and clean UI to showcase skills, projects, and experience.',
        source: websitePortfolio,
        technologies: ['ReactJS', 'Tailwind', 'JavaScript'],
        livePreview: '#',
        code: 'https://github.com/ajoshuauc/Portfolio-Website',
    },
    {
        name: 'Memory Online Multiverse',
        description: 'A collaborative project where we created a gacha simulator inspired from Genshin Impact and Honkai Star Rail. Tools used were HTML, CSS, and JavaScript',
        source: gachagame,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        livePreview: 'https://ajoshuauc.github.io/Gacha-Website-Group-Work-/',
        code: 'https://github.com/ajoshuauc/Gacha-Website-Group-Work-',
    },
    {
        name: 'Online Connect4',
        description: 'A web-based single-player Connect 4 game with an AI opponent using Minimax with Alpha-Beta Pruning. Features adjustable difficulty, strategic gameplay, and is deployed on Vercel for easy access.',
        source: connect4,
        technologies: ['ReactJS', 'TypeScript'],
        livePreview: 'https://connect4aigameagent.vercel.app/',
        code: 'https://github.com/ayk-anonymous/connect4aigameagent',
    },
];

function Projects() {
    return (
        <section id="Projects" className="py-24 px-6 sm:w-2xl md:w-3xl lg:w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-textcolor mb-10">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-y-6 place-items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-cards rounded-xl w-64 h-[27rem] flex flex-col border border-[#2c3e50] hover:border-secondary shadow-[0_0_6px_#1a1a1a] hover:shadow-[0_0_16px_#A1F6FF] hover:-translate-y-2 ease-in-out transition-all duration-300 overflow-hidden"
                    >
                        {/* Image */}
                        <img src={project.source} className="h-40 w-full object-cover object-center" />

                        {/* Text Content */}
                        <div className="flex flex-col items-center text-center p-3">
                            <h3 className="p-2 m-1 text-lg font-bold">{project.name}</h3>

                            {/* Technologies Used */}
                            <div className="flex flex-wrap justify-center gap-2 text-[0.6rem] text-secondary mb-2">
                                {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-[#1A2E3A] rounded-full px-3 py-1">
                                    {tech}
                                </span>
                                ))}
                            </div>


                            <p className="text-xs text-slate-300 font-medium">{project.description}</p>

                            {/* Buttons */}
                            <div className="flex gap-8 mt-5 text-sm items-center">
                                <a href={project.livePreview} target="_blank" rel="noreferrer" className="text-white hover:underline">
                                    Live Preview
                                </a>
                                <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:underline">
                                    <img src={git} alt="GitHub" className="h-3 w-3" />
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}




export default Projects;
