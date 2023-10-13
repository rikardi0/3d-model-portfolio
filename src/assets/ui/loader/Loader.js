import React from "react";
import { useProgress } from "@react-three/drei";
import "./Loader.css";
export const CustomLoader = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <div
      className={`loadingScreen`}
      style={{
        visibility: `${progress === 100 ? "hidden" : "visible"}`,
      }}
    >
      <div
        className="loadingScreen__progress__value"
        style={{
          width: `${progress}%`,
          visibility: `${progress === 100 ? "hidden" : "visible"}`,
        }}
      >
        {progress > 20 ? `${progress.toFixed(0)}%` : ""}
      </div>
    </div>
  );
};
