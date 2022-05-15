import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/styles.css";

import Flashcards from "./Flashcards";
import SplashScreen from "./SplashScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/flashcards" element={<Flashcards />} />
            </Routes>
        </BrowserRouter>
    )
}