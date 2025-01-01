import logo from "../assets/logo_lk-removebg-preview 1.png"
import "../styles.css"
import { Nav } from "./Nav"

export function Header() {
    return (
        <>
            <header className="bg-main px-6 py-4">
                <div className="flex justify-between items-center max-w-5xl mx-auto">
                    {/* <!-- Nome --> */}
                     <a href="#"><img src={logo} className="w-28"/></a>

                    {/* <!-- Links --> */}
                    <Nav />
                </div>

                {/* <!-- Linha fina abaixo --> */}
                <div className="border-t border-gray-500 mt-2"></div>
            </header>

        </>
    )
}