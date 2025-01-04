import logo from "../../assets/logo_lk-removebg-preview 1.png"
import "../../styles.css"
import { Nav } from "./Nav"
import { Line } from "../Utils/Line"

export function Header() {
    return (
        <>
            <header className="bg-main px-6 py-4 md:px-8 lg:px-12 transition-all duration-300">
                <div className="flex justify-between items-center max-w-7xl mx-auto transition-all duration-300">
                    {/* Nome */}
                    <a href="#"><img src={logo} className="w-28 md:w-32 lg:w-36 transition-all duration-300" alt="logo LK Solutions"/></a>

                    {/* Links */}
                    <Nav />
                </div>

                {/* Linha fina abaixo */}
                <Line className="border-t border-gray-500 mt-2 transition-all duration-300"/>
            </header>
        </>
    )
}