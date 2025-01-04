import html from "../../assets/html5-brands-solid.svg"
import css from "../../assets/css3-alt-brands-solid.svg"
import js from "../../assets/square-js-brands-solid.svg"
import ts from "../../assets/Group 4 (1).svg"
import figma from "../../assets/figma-brands-solid.svg"
import react from "../../assets/react-brands-solid.svg"
import tailwind from "../../assets/TAILWIND.svg"
import mongoDB from "../../assets/mongoDB.svg"
import { Line } from "../Utils/Line"
import { translations } from "../Utils/Translation"
import { useLanguage } from "../Utils/LanguageContext"


export function Tech(){

    const {language} = useLanguage()
    const techText = translations[language].tech
    return (
        <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 transition-all duration-300">
            <div className="max-w-7xl mx-auto transition-all duration-300">
                <h2 className="font-suisse font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 md:mb-16 lg:mb-20 transition-all duration-300">
                    {techText.title}
                </h2>

                <ul className="flex gap-6 md:gap-12 lg:gap-16 flex-wrap justify-center pb-12 md:pb-16 lg:pb-20 transition-all duration-300">
                    <li><img src={html} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={css} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={figma} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={js} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={react} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={ts} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={tailwind} className="w-14 md:w-16 lg:w-20 hover:scale-110 transition-all duration-300"/></li>
                    <li><img src={mongoDB} className="w-10 md:w-12 lg:w-16 hover:scale-110 transition-all duration-300"/></li>
                </ul>
                <Line className="border-t border-gray-500 transition-all duration-300"/>
            </div>
        </section>
    )
}