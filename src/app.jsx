import { useState } from "react"

const cardsInfo = [
    {
        id: 7336,
        question: "Do quê aplicações React são feitas?",
        answer: "Componentes",
    },
    {
        id: 8832,
        question: "Qual é o nome da sintaxe usada para descrever UI no React?",
        answer: "JSX",
    },
    {
        id: 3457,
        question: "Em qual linguagem o React é baseado?",
        answer: "JavaScript",
    },
    {
        id: 9103,
        question: "Qual método usar para renderizar uma lista no React?",
        answer: "map",
    },
    {
        id: 1297,
        question: "Qual empresa criou o React?",
        answer: "Meta",
    },
    {
        id: 2002,
        question: "Como passar informações para um componente React?",
        answer: "Através de props",
    },
]


const App = () => {
    const [activedId, setActivedId] = useState(0)
    const handleLog = (id) => setActivedId((a) => (a === id ? 0 : id))
    console.log(activedId)


    return (
        <ul className="flashcards">
            {cardsInfo.map(({ id, question, answer }) => {
                const active = id === activedId
                return (
                    <li
                        key={id}
                        className={`card ${active ? 'card-active' : ''}`}
                        onClick={() => handleLog(id)}>
                        {active ? answer : question}
                    </li>
                )
            })}
        </ul>
    )

}

export { App }