import { Line } from "../Utils/Line";
import { translations } from "../Utils/Translation";
import { useLanguage } from "../Utils/LanguageContext";



export function Why(){

    const {language} = useLanguage();
    const whyTexts = translations[language].why

    return (
        <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 transition-all duration-300">
            <div className="max-w-7xl mx-auto transition-all duration-300">
                <Line className="border-t border-gray-500 mb-12 md:mb-16 lg:mb-20 transition-all duration-300" />
                <h2 className="font-suisse font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 md:mb-16 lg:mb-20 transition-all duration-300">
                    {whyTexts.title}
                </h2>

                <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16 transition-all duration-300">
                    <p className="text-gray-800 leading-relaxed mb-6 md:mb-0 transition-all duration-300">{whyTexts.paragraph1}</p>
                    <p className="text-gray-800 leading-relaxed transition-all duration-300">{whyTexts.paragraph2}</p>
                </div>
            </div>
        </section>
    )
}