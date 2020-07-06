export interface LevelProps {
    width: string;
    children: string;
}

export function Level({...props}: LevelProps) {
    return <div className={`p-2 my-2 text-white bg-orange-400 rounded font-bold w-${props.width}`}>{props.children}</div>
}