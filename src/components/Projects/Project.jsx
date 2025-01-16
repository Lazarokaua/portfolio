import { ProjectCard } from "./ProjectCard"
import spotify from "../../assets/spotify.png"
import gitHub from "../../assets/gitHubProject.png"
import nlw from "../../assets/nlw.png"
import codigoCerto from "../../assets/codigoCerto.png"
import chatGPT from "../../assets/chatGPT.png"
import simmonGame from "../../assets/simmoGame.png"
import deviceManagement from "../../assets/deviceManagement.png"
import { translations } from "../Utils/Translation"
import { useLanguage } from "../Utils/LanguageContext"

export function Project() {
    const { language } = useLanguage()
    const projectsTexts = translations[language].projects
    
    return (
        <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 transition-all duration-300">
            <div className="max-w-7xl mx-auto transition-all duration-300">
                <h2 className="font-suisse font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 md:mb-16 lg:mb-20 transition-all duration-300">
                    {projectsTexts.title}
                </h2>
                
                <div id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 transition-all duration-300">
                    <ProjectCard
                        url="https://spotify-clone-five-neon.vercel.app/"
                        image={spotify}
                        title={projectsTexts.titleProject1}
                        description={projectsTexts.description1}
                    />

                    <ProjectCard
                        url="https://spotify-clone-five-neon.vercel.app/"
                        image={gitHub}
                        title={projectsTexts.titleProject2}
                        description={projectsTexts.description2}
                    />

                    <ProjectCard
                        url="https://spotify-clone-five-neon.vercel.app/"
                        image={nlw}
                        title={projectsTexts.titleProject3}
                        description={projectsTexts.description3}
                    />

                    <ProjectCard
                        url="https://spotify-clone-five-neon.vercel.app/"
                        image={codigoCerto}
                        title={projectsTexts.titleProject4}
                        description={projectsTexts.description4}
                    />

                    <ProjectCard
                        url="https://spotify-clone-five-neon.vercel.app/"
                        image={chatGPT}
                        title={projectsTexts.titleProject5}
                        description={projectsTexts.description5}
                    />

                    <ProjectCard
                        url="https://spotify-clone-five-neon.vercel.app/"
                        image={simmonGame}
                        title={projectsTexts.titleProject6}
                        description={projectsTexts.description6}
                    />

                    <ProjectCard
                        url="https://github.com/Lazarokaua/emprestimo-dispositivos"
                        image={deviceManagement}
                        title={projectsTexts.titleProject7}
                        description={projectsTexts.description7}
                    />
                </div>
            </div>
        </section>
    )
}