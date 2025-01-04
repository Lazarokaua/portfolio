import { Line } from "../Utils/Line";
import { translations } from "../Utils/Translation";
import { useLanguage } from "../Utils/LanguageContext";



export function Why(){

    const {language} = useLanguage();
    const whyTexts = translations[language].why

    return (
        <section className="px-6 py-4 flex flex-col gap-4">
            <Line className="border-t border-gray-500 mb-4" />
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide">{whyTexts.title}</h2>

            <p className="text-gray-800 leading-relaxed">{whyTexts.paragraph1}</p>

            <p className="text-gray-800 leading-relaxed">{whyTexts.paragraph2}</p>
        </section>
    )
}