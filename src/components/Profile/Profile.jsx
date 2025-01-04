import profile from "../../assets/profile.jpg"
import linkedIn from "../../assets/linkedInIcon.png"
import gitHub from "../../assets/gitHubIcon.png"
import instagram from "../../assets/instagramIcon.png"
export function Profile() {
    return (
        <div className="bg-main flex justify-center pb-6 flex-col relative">
            <img src={profile} alt="Lázaro Photo Profile" className="rounded-3xl"/>
            <div>
                {/* social midia icons */}
                <ul className="flex gap-4 p-4 justify-end">
                    <li><a href="https://www.linkedin.com/in/lazarokaua/" target="_blank"><img src={linkedIn} className="w-8  hover:scale-110 transition-transform duration-200"/></a></li>
                    <li><a href="https://github.com/Lazarokaua" target="_blank"><img src={gitHub} className="w-8 hover:scale-110 transition-transform duration-200"/></a></li>
                    <li><a href="https://www.instagram.com/lazarokaua_/" target="_blank"><img src={instagram} className="w-8  hover:scale-110 transition-transform duration-200"/></a></li>
                </ul>
            </div>
        </div>
    )
}