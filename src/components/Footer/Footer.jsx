/* eslint-disable react/no-unescaped-entities */
import linkedIn from "../../assets/linkedInIcon.png"
import gitHub from "../../assets/gitHubIcon.png"
import instagram from "../../assets/instagramIcon.png"
import { Line } from "../Utils/Line"
import { translations } from "../Utils/Translation"
import { useLanguage } from "../Utils/LanguageContext"

export function Footer() {
    const {language} = useLanguage();
    const footerTexts = translations[language].footer
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 transition-all duration-300">
            <div className="max-w-7xl mx-auto transition-all duration-300">
                <Line className="border-t border-gray-500 mb-12 md:mb-16 lg:mb-20 transition-all duration-300" />

                <h2 className="font-suisse font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-wide mb-12 md:mb-16 lg:mb-20 transition-all duration-300">
                    {footerTexts.title}
                </h2>

                <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16 mb-12 md:mb-16 lg:mb-20 transition-all duration-300">
                    <p className="text-gray-800 leading-relaxed mb-4 md:mb-0">
                        {footerTexts.msg}
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                        {footerTexts.hello}<span className="underline cursor-pointer">
                            <a href="https://www.linkedin.com/in/lazarokaua/">{footerTexts.span}</a>!
                        </span>
                    </p>
                </div>

                <ul className="flex gap-8 md:gap-12 lg:gap-16 justify-center mb-12 transition-all duration-300">
                    <li>
                        <a href="https://www.linkedin.com/in/lazarokaua/" target="_blank" className="flex flex-col items-center">
                            <img src={linkedIn} className="w-8 md:w-10 lg:w-12 hover:scale-110 transition-transform duration-200 mb-2" />
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Lazarokaua" target="_blank" className="flex flex-col items-center">
                            <img src={gitHub} className="w-8 md:w-10 lg:w-12 hover:scale-110 transition-transform duration-200 mb-2" />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/lazarokaua_/" target="_blank" className="flex flex-col items-center">
                            <img src={instagram} className="w-8 md:w-10 lg:w-12 hover:scale-110 transition-transform duration-200 mb-2" />
                            Instagram
                        </a>
                    </li>
                </ul>

                <div className="text-center text-gray-600 text-sm md:text-base">
                    <p>{footerTexts.copyright}</p>
                    <p>© {currentYear}</p>
                </div>
            </div>
        </footer>
    )
}