import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { translations } from "../Utils/Translation";
import { useLanguage } from "../Utils/LanguageContext";

export function Typing() {
    const el = useRef(null);
    const typed = useRef(null);

    const { language } = useLanguage();
    const typingTexts = translations[language].typing;

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: [
                "Lázaro Kauã", 
                "Dev Front-End", 
                typingTexts.emphasis
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.current.destroy();
        };
    }, [language]);

    return (
        <div className="flex py-4 mb-8 md:mb-0 md:py-8 lg:py-12 md:items-center md:h-full transition-all duration-300">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-suisse transition-all duration-300">
                <span className="block md:mb-2">{typingTexts.toBe}</span>
                <span ref={el} className="text-detail"></span>
            </h1>
        </div>
    );
}
