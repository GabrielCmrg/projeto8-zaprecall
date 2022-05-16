import party from "../assets/images/party.png";
import sad from "../assets/images/sad.png";

function FinishMessage({answerList}) {
    let pic;
    let title;
    let message;
    if (answerList.includes("incorrect")) {
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

export default function Bottom({count, answerList}) {
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
            {count === 4? <FinishMessage answerList={answerList}/>: <></>}
            <span className="bottom-message">{count.toString() + "/4 CONCLUÍDOS"}</span>
            <div className="answer-list">
                { iconList.map(icon => <ion-icon name={icon.name} style={{color: icon.color}}></ion-icon>)}
            </div>
        </div>
    )
}