/* eslint-disable react/no-unescaped-entities */
import linkedIn from "../../assets/linkedInIcon.png"
import gitHub from "../../assets/gitHubIcon.png"
import instagram from "../../assets/instagramIcon.png"
import { Line } from "../Utils/Line"

export function Footer() {
    return (
        <>
            <footer id="contact" className="px-6 py-4 flex flex-col gap-4">
                <Line className="border-t border-gray-500" />

                <h2 className="font-suisse font-bold text-center text-2xl tracking-wide">Let's talk?</h2>

                <div className="flex flex-col gap-4">
                    <p className="text-gray-800 leading-relaxed">
                        If you want to ask me any questions, feel free to connect with me on any of my networks!
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                        Say hello on <span className="underline cursor-pointer"><a href="https://www.linkedin.com/in/lazarokaua/">LinkedIn</a>!</span>
                    </p>
                </div>

                {/* icones das redes */}
                <ul className="flex gap-6">
                    <li><a href="https://www.linkedin.com/in/lazarokaua/" target="_blank"><img src={linkedIn} className="w-8  hover:scale-110 transition-transform duration-200 pb-2" />LinkedIn</a></li>
                    <li><a href="https://github.com/Lazarokaua" target="_blank"><img src={gitHub} className="w-8 hover:scale-110 transition-transform duration-200 pb-2" /></a>GitHub</li>
                    <li><a href="https://www.instagram.com/lazarokaua_/" target="_blank"><img src={instagram} className="w-8  hover:scale-110 transition-transform duration-200 pb-2" />Instagram</a></li>
                </ul>
            </footer>
        </>
    )
}