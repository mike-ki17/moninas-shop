import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-2 sm:space-x-4">
      <div className="flex flex-col items-center">
        <div className="bg-white text-neutral-900 rounded-lg p-2 sm:p-3 w-14 sm:w-16 text-center">
          <span className="text-xl sm:text-2xl font-bold">{timeLeft.days}</span>
        </div>
        <span className="text-xs sm:text-sm mt-1 text-white">Días</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white text-neutral-900 rounded-lg p-2 sm:p-3 w-14 sm:w-16 text-center">
          <span className="text-xl sm:text-2xl font-bold">{timeLeft.hours}</span>
        </div>
        <span className="text-xs sm:text-sm mt-1 text-white">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white text-neutral-900 rounded-lg p-2 sm:p-3 w-14 sm:w-16 text-center">
          <span className="text-xl sm:text-2xl font-bold">{timeLeft.minutes}</span>
        </div>
        <span className="text-xs sm:text-sm mt-1 text-white">Minutos</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white text-neutral-900 rounded-lg p-2 sm:p-3 w-14 sm:w-16 text-center">
          <span className="text-xl sm:text-2xl font-bold">{timeLeft.seconds}</span>
        </div>
        <span className="text-xs sm:text-sm mt-1 text-white">Segundos</span>
      </div>
    </div>
  );
};

export default CountdownTimer;