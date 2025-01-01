import us from "../../assets/US.jpg"
import br from "../../assets/BR.png"

import { useState } from "react"

export function Nav() {

    const [language, setLanguage] = useState("en")

    const navTexts = {
        en: { contact: "Contact", projetcs: "Projects", about: "About" },
        pt: { contact: "Contato", projetcs: "Projetos", about: "Sobre" },
    }

    return (
        <>
            <nav className="flex space-x-4 text-sm">
                <a href="#" className="hover:underline font-suisse font-bold">{navTexts[language].contact}</a>
                <a href="#" className="hover:underline font-suisse font-bold">{navTexts[language].projetcs}</a>
                <a href="#about" className="hover:underline font-suisse font-bold">{navTexts[language].about}</a>

                <button title="Click to change language" onClick={() => {
                    setLanguage((e) => (e === "en" ? "pt" : "en"))
                }}>
                    {language === "en" ? (
                        <img src={us} className="w-6 cursor-pointer" alt="US Flag" />
                    ) : (
                        <img src={br} className="w-6 cursor-pointer" alt="BR Flag" />
                    )}

                </button>


            </nav>
        </>
    )
}