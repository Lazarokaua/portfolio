import { ExperienceCard } from "./ExperienceCard"
import logoGCB from "../../assets/Bahia-logo 1.png"
import logoCiee from "../../assets/logo-ciee (1) 1.png"
import { translations } from "../Utils/Translation"
import { useLanguage } from "../Utils/LanguageContext"


export function Experience() {

    const { language } = useLanguage(); // pegar o idioma atual
    const experienceTexts = translations[language].experience // pegar os textos na traducao com base no idioma atual

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 transition-all duration-300">
            <h2 className="font-suisse font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 md:mb-16 lg:mb-20 transition-all duration-300">
                {experienceTexts.title}
            </h2>

            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16 transition-all duration-300">
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
            </div>
        </section>
    )
}