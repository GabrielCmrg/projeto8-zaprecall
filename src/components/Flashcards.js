import react from "react";

import flip from "../assets/images/setinha.png";

function randomShuffleNumber() {
    return Math.random() - 0.5;
}

function ConcealedCard({index, setConcealed}) {
    return (
        <div className="ask-card concealed">
            <span>Pergunta {index + 1}</span>
            <ion-icon name="play-outline" onClick={() => setConcealed(false)}></ion-icon>
        </div>
    )
}

function UnconcealedCard({ask, answer, setConcealed}) {
    const [text, setText] = react.useState(ask);
    let complementaryClass;
    if (text === ask) {
        complementaryClass = "ask";
    } else {
        complementaryClass = "answer";
    }

    return (
        <div className="ask-card not-concealed">
            <span className="text">{text}</span>
            <div className={"buttons " + complementaryClass}>
                {text === ask ? 
                <img src={flip} alt="flip arrow" width="30" height="20" onClick={() => setText(answer)}/>: 
                <>
                <div onClick={() => setConcealed(true)}>Não lembrei</div>
                <div onClick={() => setConcealed(true)}>Quase não lembrei</div>
                <div onClick={() => setConcealed(true)}>Zap!</div>
                </>}
            </div>
        </div>
    )
}

function Card({index, ask, answer}) {
    const [concealed, setConcealed] = react.useState(true);

    return ( 
        concealed ?
        <ConcealedCard index={index} setConcealed={setConcealed} /> : 
        <UnconcealedCard ask={ask} answer={answer} setConcealed={setConcealed}/>
    )
}

export default function Flashcards() {
    const cards = [
        {ask: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {ask: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {ask: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {ask: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    ].sort(randomShuffleNumber);

    return (
        <>
            { cards.map((card, index) => <Card key={index} index={index} ask={card.ask} answer={card.answer} />) }
        </>
    )
}