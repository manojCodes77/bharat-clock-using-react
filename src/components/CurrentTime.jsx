import { useState, useEffect } from "react";

let CurrentTime = () => {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (isRunning) {
                setTime(new Date());
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStopTime = () => {
        if(isRunning){
            setIsRunning(false);
        }
        else{
            setIsRunning(true);
        }
    };

    return (
        <div>
            {isRunning && <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>}
            <button onClick={handleStopTime} className="px-2 py-1 mt-3 bg-green-800 rounded-xl text-green-50 hover:bg-green-700 transition-all duration-300 hover:scale-110">
                {isRunning ? "Stop Time" : "Resume Time"}
            </button>
        </div>
    );
};

export default CurrentTime;