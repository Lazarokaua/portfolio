/* eslint-disable react/no-unescaped-entities */
import { Line } from "../Utils/Line"
import { translations } from "../Utils/Translation";
import { useLanguage } from "../Utils/LanguageContext";

export function About() {


    const {language} = useLanguage();
    const age = new Date().getFullYear() - 2004;

    const aboutTexts = translations[language].about;

    return (
        <section id="about" className="flex flex-col gap-5">
            <Line className="border-t border-gray-500 " />
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide ">{aboutTexts.title}</h2>
            <p className="font-thin text-xl">{aboutTexts.paragraph1.replace("{age}", age)}</p>

            <p className="font-thin text-xl">{aboutTexts.paragraph2}</p>
            <p className="font-thin text-xl">{aboutTexts.paragraph3}</p>
            <p className="font-thin text-xl">{aboutTexts.paragraph4}</p>
            <p className="font-thin text-xl">{aboutTexts.paragraph5}</p>
        </section>
    )
}