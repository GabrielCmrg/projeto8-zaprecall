import react from "react";

import flip from "../assets/images/setinha.png";

function randomShuffleNumber() {
    return Math.random() - 0.5;
}

function ConcealedCard({index, setConcealed, style}) {
    let icon = "play-outline";
    let clickFunction = () => setConcealed(false);
    if (style === "correct") {
        icon = "checkmark-circle";
        clickFunction = () => {};
    } else if (style === "incorrect") {
        icon = "close-circle";
        clickFunction = () => {};
    } else if (style === "effort") {
        icon = "help-circle";
        clickFunction = () => {};
    }

    return (
        <div className={"ask-card concealed " + style}>
            <span>Pergunta {index + 1}</span>
            <ion-icon name={icon} onClick={clickFunction}></ion-icon>
        </div>
    )
}

function UnconcealedCard({ask, answer, setStyle, count, setCount, answerList, setAnswerList}) {
    const [text, setText] = react.useState(ask);
    let complementaryClass;
    if (text === ask) {
        complementaryClass = "ask";
    } else {
        complementaryClass = "answer";
    }

    function addCount(style) {
        setStyle(style);
        setAnswerList([...answerList, style]);
        setCount(count + 1);
    }

    return (
        <div className="ask-card not-concealed">
            <span className="text">{text}</span>
            <div className={"buttons " + complementaryClass}>
                {text === ask ? 
                <img src={flip} alt="flip arrow" width="30" height="20" onClick={() => setText(answer)}/>: 
                <>
                <div className="no" onClick={() => addCount("incorrect")}>Não lembrei</div>
                <div className="almost" onClick={() => addCount("effort")}>Quase não lembrei</div>
                <div className="yes" onClick={() => addCount("correct")}>Zap!</div>
                </>}
            </div>
        </div>
    )
}

function Card({index, ask, answer, count, setCount, answerList, setAnswerList}) {
    const [concealed, setConcealed] = react.useState(true);
    const [style, setStyle] = react.useState("");
    react.useEffect(() => setConcealed(true), [style]);

    return ( 
        concealed ?
        <ConcealedCard index={index} setConcealed={setConcealed} style={style} /> : 
        <UnconcealedCard
            ask={ask}
            answer={answer}
            setStyle={setStyle}
            count={count}
            setCount={setCount}
            answerList={answerList}
            setAnswerList={setAnswerList}
        />
    )
}

export default function Flashcards({count, setCount, answerList, setAnswerList}) {
    const cards = [
        {ask: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {ask: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {ask: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {ask: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    ].sort(randomShuffleNumber);

    return (
        <>
            { cards.map(
                (card, index) => 
                <Card
                    key={index}
                    index={index}
                    ask={card.ask}
                    answer={card.answer}
                    count={count}
                    setCount={setCount}
                    answerList={answerList}
                    setAnswerList={setAnswerList}
                />)
            }
        </>
    )
}