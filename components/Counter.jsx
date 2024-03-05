'use client'
// components/DaysCounter.js
import { useState, useEffect } from 'react';
// import { FaRegCalendar } from 'react-icons/fa';

const DaysCounter = ({ targetDate }) => {

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  },[])

  return (
    <div className="flex items-center justify-center space-x-4 p-4 rounded-lg shadow-md mt-10">{
        Object.keys(timer).map((key, index) => (
          <div className="flex flex-col items-center justify-center" key={index}>
            <span className="text-4xl md:text-6xl font-bold">{timer[key]} {
            index !== Object.keys(timer).length - 1 ? ':' : ''
            }</span>
            <span className="text-sm text-gray-500">{key}</span>
          </div>
        ))}
    </div>
  );
};

export default DaysCounter;
