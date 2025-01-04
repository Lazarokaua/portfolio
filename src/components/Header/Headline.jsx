import { Profile } from "../Profile/Profile"
import { Typing } from "../Profile/Typing"
import { About } from "../About/About"
import { Line } from "../Utils/Line"


export function Headline(){

    return (
        <section className="lg:grid lg:grid-cols-2 px-6 py-4">
              <Typing />
              <Profile /> 
              <About />
              <Line className="border-t border-gray-500 mt-4"/>
        </section>
    )
}