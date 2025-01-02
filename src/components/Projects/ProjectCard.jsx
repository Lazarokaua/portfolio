
export function ProjectCard(props){
    return (
        <div className="grid grid-cols-1 px-6 py-4">

            <a href={props.url} target="_blank"><img  src={props.image} className="w-96 h-44 cursor-pointer rounded-lg filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"/></a>

            <h4 className="font-bold pt-4 pb-2">{props.title}</h4>

            <p>{props.description}</p>

        </div>
    )
}