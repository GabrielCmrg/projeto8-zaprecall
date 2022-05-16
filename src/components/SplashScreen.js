import { Link } from "react-router-dom";
import react from "react";

import logo from "../assets/images/logo.png";

function Button({disabled}) {
    return (
        <Link to={disabled? "": "/flashcards"}>
            <button className={disabled? "disabled": ""}>Iniciar Recall!</button>
        </Link>
    )
}

export default function SplashScreen({setGoal}) {
    const [disabled, setDisabled] = react.useState(true);

    function verifyInput(e) {
        const enteredNumber = parseInt(e.target.value);
        if (enteredNumber >= 1 && enteredNumber <= 4) {
            setDisabled(false);
            setGoal(enteredNumber);
        } else {
            setDisabled(true);
        }
    }

    return (
        <div className="splash">
            <img src={logo} alt="logo" width="136" height="161" />
            <h1>ZapRecall</h1>
            <input type="text" placeholder="Digite sua meta de zaps..." onChange={verifyInput}/>
            <Button disabled={disabled}/>
        </div>
    )
}