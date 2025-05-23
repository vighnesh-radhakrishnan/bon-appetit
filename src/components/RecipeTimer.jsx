import React, { useState, useEffect } from "react";
const RecipeTimer = ({ time }) => {
  const [minutes, setMinutes] = useState(time || "");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (time && !isActive) {
      setMinutes(time);
    }
  }, [time, isActive]);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsActive(false);
          const audio = new Audio(
            "https://cdn.freesound.org/previews/411/411089_5121236-lq.mp3"
          );
          audio.play().catch((e) => console.log("Audio play failed:", e));
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused, minutes, seconds]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setMinutes(value === "" ? "" : parseInt(value));
    }
  };
  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };
  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };
  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setMinutes("");
    setSeconds(0);
  };
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "40px",
          marginBottom: "15px",
        }}
      >
        <div style={{ width: "90px", marginRight: "10px" }}>
          {!isActive ? (
            <input
              type="number"
              value={minutes}
              onChange={handleInputChange}
              placeholder="min"
              style={{
                width: "90px",
                height: "40px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
                textAlign: "center",
                boxSizing: "border-box",
                fontFamily: "Playwrite US Modern",
              }}
            />
          ) : (
            <div
              style={{
                width: "90px",
                height: "40px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                boxSizing: "border-box",
                fontFamily: "Playwrite US Modern",
              }}
            >
              {formatTime(minutes)}:{formatTime(seconds)}
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: "10px", height: "40px" }}>
          {!isActive ? (
            <button
              onClick={startTimer}
              disabled={minutes === ""}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor: "transparent",
                color: "#4CAF50",
                cursor: minutes === "" ? "default" : "pointer",
                fontSize: "14px",
                height: "40px",
                boxSizing: "border-box",
                fontFamily: "Playwrite US Modern",
                border: "1px solid #4CAF50",
              }}
            >
              Start
            </button>
          ) : (
            <>
              <button
                onClick={pauseTimer}
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  color: "#FF9800",
                  border: "1px solid #FF9800",
                  cursor: "pointer",
                  fontSize: "14px",
                  height: "40px",
                  boxSizing: "border-box",
                  fontFamily: "Playwrite US Modern",
                }}
              >
                {isPaused ? "Resume" : "Pause"}
              </button>
              <button
                onClick={resetTimer}
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  color: "#F44336",
                  border: "1px solid #F44336",
                  cursor: "pointer",
                  fontSize: "14px",
                  height: "40px",
                  boxSizing: "border-box",
                  fontFamily: "Playwrite US Modern",
                }}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#666",
          height: "20px",
          textAlign: "center",
        }}
      >
        {isActive && (
          <span>
            Timer running for {minutes} min {seconds} sec
          </span>
        )}
      </div>
    </div>
  );
};
export default RecipeTimer;
