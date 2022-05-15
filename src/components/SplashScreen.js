import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function SplashScreen() {
    return (
        <div className="splash">
            <img src={logo} alt="logo" width="136" height="161" />
            <h1>ZapRecall</h1>
            <Link to="/flashcards">
                <button>Iniciar Recall!</button>            
            </Link>
        </div>
    )
}