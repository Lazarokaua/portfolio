import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { translations } from "../Utils/Translation";
import { useLanguage } from "../Utils/LanguageContext";

export function Typing() {
    const el = useRef(null); // Cria uma referência ao elemento
    const typed = useRef(null);

    const { language } = useLanguage(); // Obtém o idioma atual
    const typingTexts = translations[language].typing; // Textos baseados no idioma

    useEffect(() => {
        // Configuração do Typed.js
        typed.current = new Typed(el.current, {
            strings: [
                "Lázaro Kauã", 
                "Dev Front-End", 
                typingTexts.emphasis // Usa o texto traduzido
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.current.destroy(); // Destruir na desmontagem
        };
    }, [language]); // Recria o efeito quando o idioma muda

    return (
        <div className="flex p-4 mb-8 justify-center">
            <h1 className="text-3xl font-bold font-suisse">
                <span>{typingTexts.toBe} </span>
                <span ref={el} className="text-detail"></span> {/* Elemento vinculado ao Typed.js */}
            </h1>
        </div>
    );
}
