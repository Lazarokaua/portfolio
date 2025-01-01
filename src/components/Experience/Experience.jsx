import { ExperienceCard } from "./ExperienceCard"
import logoGCB from "../../assets/Bahia-logo 1.png"
import logoCiee from "../../assets/logo-ciee (1) 1.png"
export function Experience() {
    return (
        <section>
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide">My Experience</h2>

            <ExperienceCard image={logoGCB} alt="Logo Casas Bahia" cargo="Young Logistics Apprentice" time="Apr 2023 - The Moment" description="As a Young Apprentice in the Casas Bahia group, I gained valuable knowledge in the area, using my creativity, critical thinking, problem solving and more. I managed to develop my programming skills, which had a great influence on my development and learning." />

            <ExperienceCard
                image={logoCiee}
                alt="Logo Ciee Centro de Integracao Empresa Escola"
                cargo="CIEE Theoretical Training"
                time="Apr 2023 - The Moment"
                description="At the company-school integration center (CIEE), I obtained the skills needed for the job market, where I was able to grow and develop to meet the demands of the job market. A joint project with the Casas Bahia Group, to train young apprentices."
            />
        </section>
    )
}