import { useEffect, useState } from "react";
import us from "../../assets/US.jpg";
import br from "../../assets/BR.png";
import { translations } from "../../components/Utils/Translation";
import { useLanguage } from "../../components/Utils/LanguageContext";

export function Nav() {
    const { language, setLanguage } = useLanguage();
    const [showMobileHint, setShowMobileHint] = useState(true);

    // Mostrar dica por 3 segundos ao carregar em dispositivos móveis
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMobileHint(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className="flex space-x-4 text-sm items-center">
            <a href="#contact" className="hover:underline font-suisse font-bold">
                {translations[language].nav.contact}
            </a>
            <a href="#projects" className="hover:underline font-suisse font-bold">
                {translations[language].nav.projects}
            </a>
            <a href="#about" className="hover:underline font-suisse font-bold">
                {translations[language].nav.about}
            </a>

            <div className="relative group">
                <button
                    onClick={() => setLanguage(language === "en" ? "pt" : "en")}
                    className={`relative ${showMobileHint ? 'animate-pulse ring-2 ring-detail ring-offset-2 rounded-full' : ''}`}
                >
                    {language === "en" ? (
                        <img 
                            src={us} 
                            className={`w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full ${showMobileHint ? 'scale-110' : ''}`} 
                            alt="US Flag" 
                        />
                    ) : (
                        <img 
                            src={br} 
                            className={`w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full ${showMobileHint ? 'scale-110' : ''}`} 
                            alt="BR Flag" 
                        />
                    )}
                </button>

                {/* Tooltip para Desktop */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block">
                    {language === "en" ? "Click to change to Portuguese" : "Clique para mudar para Inglês"}
                </span>

                {/* Indicador Mobile/Tablet */}
                {showMobileHint && (
                    <div className="md:hidden absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap animate-bounce shadow-lg">
                        <div className="relative">
                            {language === "en" ? "Tap to change language" : "Toque para mudar idioma"}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-gray-800 border-r-[6px] border-r-transparent"></div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
