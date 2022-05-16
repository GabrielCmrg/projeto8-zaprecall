import { Link } from "react-router-dom";

import party from "../assets/images/party.png";
import sad from "../assets/images/sad.png";

function FinishMessage({answerList, goal}) {
    let zaps = 0;
    answerList.forEach(result => {if (result === "correct") {zaps++}});
    let pic;
    let title;
    let message;
    if (zaps < goal) {
        pic = sad;
        title = "Putz...";
        message = "Ainda faltam alguns... Mas não desanime!";
    } else {
        pic = party;
        title = "Parabéns!";
        message = "Você não esqueceu de nenhum flashcard!";
    }
    return (
        <>
            <div className="title">
                <img src={pic} alt="emoji" width="23" height="23" />
                <span>{title}</span>
            </div>
            <p>{message}</p>
        </>
    )
}

export default function Bottom({count, answerList, goal}) {
    const iconList = [];
    answerList.forEach(result => {
        if (result === "correct") {
            iconList.push({name: "checkmark-circle", color: "#2FBE34"});
        } else if (result === "incorrect") {
            iconList.push({name: "close-circle", color: "#FF3030"});
        } else if (result === "effort") {
            iconList.push({name: "help-circle", color: "#FF922E"});
        }
    });

    return (
        <div className="bottom">
            {count === 4? <FinishMessage answerList={answerList} goal={goal}/>: <></>}
            <span className="bottom-message">{count.toString() + "/4 CONCLUÍDOS"}</span>
            <div className="answer-list">
                { iconList.map(icon => <ion-icon name={icon.name} style={{color: icon.color}}></ion-icon>)}
            </div>
            {count === 4? <Link to="/"><button>REINICIAR RECALL</button></Link>: <></>}
        </div>
    )
}