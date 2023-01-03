import { useEffect, useState } from "react";
import "./time.css";
const Time = () => {
  const [time, setTime] = useState(new Date());
  const date = new Date();
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-center">
      <span className="badge rounded-pill ">
        {dateString + " " + time.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default Time;
