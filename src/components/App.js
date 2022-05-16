import { BrowserRouter, Routes, Route } from "react-router-dom";
import react from "react";

import "../assets/css/reset.css";
import "../assets/css/styles.css";

import FlashScreen from "./FlashScreen";
import SplashScreen from "./SplashScreen";

export default function App() {
    const [goal, setGoal] = react.useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen setGoal={setGoal} />} />
                <Route path="/flashcards" element={<FlashScreen goal={goal} />} />
            </Routes>
        </BrowserRouter>
    )
}