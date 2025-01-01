import { Profile } from "./Profile"
import { Typing } from "./Typing"

export function Headline(){
    return (
        <section className="lg:grid lg:grid-cols-2">
              <Profile />
              <Typing />
        </section>
    )
}