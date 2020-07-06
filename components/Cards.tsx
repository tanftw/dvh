import { Card, CardProps } from './Card'

export default function Cards() {
    const cards: CardProps[] = [
        {
            icon: '',
            number: '2987',
            text: 'Long Blacks'
        },
        {
            icon: '',
            number: '146,400 kW',
            text: 'Solar Power Generated'
        },
        {
            icon: '',
            number: '446',
            text: 'Skipped Meals'
        },
        {
            icon: '',
            number: '38',
            text: 'Cars Driven'
        },
        {
            icon: '',
            number: '0',
            text: 'Parties Attended'
        },
    ]

    return (
        <div> 
            {cards.map((card, index) => 
                <Card key={index} {...card} />
            )}
        </div>
    )
}