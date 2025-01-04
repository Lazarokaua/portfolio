import { ProjectCard } from "./ProjectCard"
import spotify from "../../assets/spotify.png"
import gitHub from "../../assets/gitHubProject.png"
import nlw from "../../assets/nlw.png"
import codigoCerto from "../../assets/codigoCerto.png"
import chatGPT from "../../assets/chatGPT.png"
import simmonGame from "../../assets/simmoGame.png"
import { translations } from "../Utils/Translation"
import { useLanguage } from "../Utils/LanguageContext"

export function Project() {

    const { language } = useLanguage()
    const projectsTexts = translations[language].projects
    return (
        <>
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide">{projectsTexts.title}</h2>
            <section id="projects" className="px-6 py-4 lg:grid lg:grid-cols-3">

                {/* ProjectCard */}
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
            </section>
        </>
    )
}