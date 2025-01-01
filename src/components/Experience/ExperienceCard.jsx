/* eslint-disable react/prop-types */

export function ExperienceCard(props) {
    return (
        <div className="max-w-sm mx-auto p-6 rounded-lg  space-y-4">
            <div className="flex items-center space-x-4">
                <img src={props.image} alt={props.alt} className="w-12 h-12" />
                    <h2 className="text-xl font-bold">{props.cargo}</h2>
            </div>

            <p className="text-gray-600 text-sm">{props.time}</p>

            <p className="text-gray-800 leading-relaxed">
               {props.description}
            </p>
        </div>

    )
}