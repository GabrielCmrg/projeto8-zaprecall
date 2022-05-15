import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function Top() {
    return (
        <Link to="/">
            <div className="top">
                <img src={logo} alt="logo" width="52" height="60" />
                <h1>ZapRecall</h1>
            </div>
        </Link>
    )
}