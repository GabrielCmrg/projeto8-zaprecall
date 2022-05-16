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
            <span className="bottom-message">{count.toString() + "/4 CONCLUÍDOS"}</span>
            <div className="answer-list">
                { iconList.map(icon => <ion-icon name={icon.name} style={{color: icon.color}}></ion-icon>)}
            </div>
        </div>
    )
}