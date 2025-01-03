import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function Typing() {
    const el = useRef(null); // Cria uma referência ao elemento
    const typed = useRef(null);



    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ["Lázaro Kauã", "Dev Front-End", "problem solver"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.current.destroy(); // Destruir na desmontagem
        };
    }, []);

    return (
        <div className="bg-main flex p-4 justify-center">
            <h1 className="text-3xl font-bold font-suisse">
               <span>I am, </span><span ref={el} className="text-detail"></span> {/* Elemento vinculado ao Typed.js */}
            </h1>
        </div>
    );
}
