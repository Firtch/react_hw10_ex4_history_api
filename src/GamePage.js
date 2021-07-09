import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const GamePage = () => {
    const [guess, setGuess] = useState("");

    const history = useHistory();

    const handleGuess = () => {
        if(guess === "chocolate") {
            // window.history.pushState({}, "", "/winner");
            history.push("/winner")
        }
    };

    return (
        <div>
            <h1>GamePage</h1>
            <input type="text" value={guess} onChange={(e)=>setGuess(e.target.value)} />
            <button onClick={handleGuess}>Guess</button>
        </div>
    );
};

export default GamePage;