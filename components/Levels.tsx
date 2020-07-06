import { Level, LevelProps } from './Level';

export default function Levels() {
    const levels: LevelProps[] = [
        {
            width: '8/12',
            children: 'IT & Communications'
        },
        {
            width: '9/12',
            children: 'Business Process Automation'
        },
        {
            width: '6/12',
            children: 'Marketing & Sales'
        },
        {
            width: '11/12',
            children: 'Strategic Business Consulting'
        },
        {
            width: '12/12',
            children: 'Business Coaching'
        },
    ]

    return (
        <div>
            {levels.map((level, index) => <Level key={index} {...level} />)}
        </div>
    )
}