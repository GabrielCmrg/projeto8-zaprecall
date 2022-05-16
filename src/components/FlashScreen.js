import react from "react";

import Bottom from "./Bottom";
import Flashcards from "./Flashcards";
import Top from "./Top";

export default function FlashScreen() {
    const [count, setCount] = react.useState(0);
    const [answerList, setAnswerList] = react.useState([]);

    return (
        <>
            <Top />
            <Flashcards count={count} setCount={setCount} answerList={answerList} setAnswerList={setAnswerList} />
            <Bottom count={count} answerList={answerList} />
        </>
    )
}