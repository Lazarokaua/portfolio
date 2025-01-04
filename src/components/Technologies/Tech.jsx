import html from "../../assets/html5-brands-solid.svg"
import css from "../../assets/css3-alt-brands-solid.svg"
import js from "../../assets/square-js-brands-solid.svg"
import ts from "../../assets/Group 4 (1).svg"
import figma from "../../assets/figma-brands-solid.svg"
import react from "../../assets/react-brands-solid.svg"
import tailwind from "../../assets/TAILWIND.svg"
import mongoDB from "../../assets/mongoDB.svg"
import { Line } from "../Utils/Line"


export function Tech(){
    return (
        <section className="px-6 py-4">
            <h2 className="font-suisse font-bold text-center text-2xl tracking-wide mb-4">Technologies</h2>

            <ul className="flex gap-4 flex-wrap justify-center pb-4">
                <li><img src={html} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={css} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={figma} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={js} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={react} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={ts} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={tailwind} className="w-14 hover:scale-110 transition-transform duration-200"/></li>
                <li><img src={mongoDB} className="w-10 hover:scale-110 transition-transform duration-200"/></li>
            </ul>
            <Line className="border-t border-gray-500"/>
        </section>
    )
}