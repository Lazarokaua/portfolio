import us from "../../assets/US.jpg";
import br from "../../assets/BR.png";
import { translations } from "../../components/Utils/Translation";
import { useLanguage } from "../../components/Utils/LanguageContext";

export function Nav() {
    const { language, setLanguage } = useLanguage();

    return (
        <nav className="flex space-x-4 text-sm">
            <a href="#contact" className="hover:underline font-suisse font-bold">
                {translations[language].nav.contact}
            </a>
            <a href="#projects" className="hover:underline font-suisse font-bold">
                {translations[language].nav.projects}
            </a>
            <a href="#about" className="hover:underline font-suisse font-bold">
                {translations[language].nav.about}
            </a>

            <button
                title="Click to change language"
                onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            >
                {language === "en" ? (
                    <img src={us} className="w-6 cursor-pointer" alt="US Flag" />
                ) : (
                    <img src={br} className="w-6 cursor-pointer" alt="BR Flag" />
                )}
            </button>
        </nav>
    );
}
