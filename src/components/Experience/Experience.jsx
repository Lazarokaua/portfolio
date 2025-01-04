import { ExperienceCard } from "./ExperienceCard"
import logoGCB from "../../assets/Bahia-logo 1.png"
import logoCiee from "../../assets/logo-ciee (1) 1.png"
import { translations } from "../Utils/Translation"
import { useLanguage } from "../Utils/LanguageContext"


export function Experience() {

    const { language } = useLanguage(); // pegar o idioma atual
    const experienceTexts = translations[language].experience // pegar os textos na traducao com base no idioma atual

    return (
        <section>
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide">{experienceTexts.title}</h2>

            <ExperienceCard 
            image={logoGCB} 
            alt={experienceTexts.alt1} 
            position={experienceTexts.position1} 
            time={experienceTexts.time1} 
            description={experienceTexts.description1} 
            />

            <ExperienceCard 
             image={logoCiee}
             alt={experienceTexts.alt2}
             position={experienceTexts.position2} 
             time={experienceTexts.time2} 
             description={experienceTexts.description2} 
             />


        </section>
    )
}