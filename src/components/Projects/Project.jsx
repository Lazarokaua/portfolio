import { ProjectCard } from "./ProjectCard"
import spotify from "../../assets/spotify.png"
import gitHub from "../../assets/gitHubProject.png"
import nlw from "../../assets/nlw.png"
import codigoCerto from "../../assets/codigoCerto.png"
import chatGPT from "../../assets/chatGPT.png"
import simmonGame from "../../assets/simmoGame.png"

export function Project() {
    return (
        <>
        <h2 className="font-suisse font-bold text-center text-2xl tracking-wide">Projects</h2>
            <section className="px-6 py-4 lg:grid lg:grid-cols-3">

                {/* ProjectCard */}
                <ProjectCard
                    url="https://spotify-clone-five-neon.vercel.app/"
                    image={spotify}
                    title="Clone Spotify"
                    description="Projeto em Front-end da imersão front-end da alura #ImersãoFrontEnd #Alura."
                />

                <ProjectCard
                    url="https://clone-github-six.vercel.app/"
                    image={gitHub}
                    title="Clone GitHub Login"
                    description="Projeto Desenvolvido com objetivo de aprender o básico de HTML e CSS."
                />

                <ProjectCard
                    url="https://nlw-expert-react-6mblnxt4w-lazarokauas-projects.vercel.app/"
                    image={nlw}
                    title="NLW Expert notes"
                    description="Essa aplicação foi desenvolvida durante o NLW Experts da Rocketseat utilizando React, TypeScript, Tailwind e a SpeechRecognition API."
                />

                <ProjectCard
                    url="https://trilha-front-end-jr-jun-15-k44k.vercel.app/"
                    image={codigoCerto}
                    title="Trilha Inicial Front-End Jr | Codigo Certo Coders"
                    description="Este projeto tem como objetivo criar uma página web onde os candidatos podem se apresentar, compartilhar seus gostos pessoais e explicar por que desejam fazer parte da comunidade Codigo Certo Coders e participar de projetos voluntários."
                />

                <ProjectCard 
                    url="https://clone-chat-gpt-chi.vercel.app/"
                    image={chatGPT}
                    title="Clone-ChatGPT"
                    description="Este projeto é um clone da interface do ChatGPT, desenvolvido para demonstrar habilidades em desenvolvimento web front-end. O projeto recria a aparência visual e o layout da famosa interface de chat da OpenAI."
                />

                <ProjectCard 
                url="https://simon-game-xi-ten.vercel.app/"
                image={simmonGame}
                title="Bem-vindo ao Simon-game"
                description="jogo da memória com cores em JavaScript!"
                />
            </section>
        </>
    )
}