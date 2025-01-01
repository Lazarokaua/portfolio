import profile from "../assets/profile.jpg"

export function Profile(){
    return (
        <div className="bg-main flex justify-center pb-6">
            <img src={profile}/>
        </div>
    )
}