import { useState, useEffect } from 'react';

function Timer () {
    // Initialisation -----------------------
    // State --------------------------------
    const [time, setTime] = useState(new Date());

    useEffect ( () => {
        const timer = setInterval( () => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    });

    const formatTime = (date) => date.toLocaleTimeString("en-UK", { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Handlers -----------------------------
    // Views --------------------------------
    return (
       <h1>{formatTime(time)}</h1>
    )
}

export default Timer;