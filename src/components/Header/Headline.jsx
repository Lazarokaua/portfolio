import { Profile } from "../Profile"
import { Typing } from "../Typing"
import { About } from "../About"
import { Line } from "../Line"


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