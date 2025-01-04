import { Profile } from "../Profile/Profile"
import { Typing } from "../Profile/Typing"
import { About } from "../About/About"
import { Line } from "../Utils/Line"


export function Headline(){

    return (
        <section className="px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 transition-all duration-300">
            <div className="max-w-7xl mx-auto transition-all duration-300">
                <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16 transition-all duration-300">
                    <Typing />
                    <Profile />
                </div>
                <About />
                <Line className="border-t border-gray-500 mt-8 md:mt-12 lg:mt-16 transition-all duration-300"/>
            </div>
        </section>
    )
}