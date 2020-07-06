export interface CardProps {
    icon: string;
    number: string;
    text: string;
}

export function Card({...props}: CardProps) {
    return (
        <div className="inline-block py-32 px-10 border border-gray-100 text-center">
            <p className="text-5xl text-gray-500">{props.number}</p>
            <p className="text-xl">{props.text}</p>
        </div>
    )
}