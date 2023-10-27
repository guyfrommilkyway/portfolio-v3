// packages
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerInterval = setInterval(() => setTime(new Date()), 1000);

    // set up clean function
    // to prevent memory leaks
    return () => clearInterval(timerInterval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <span className='text-neutral-300 leading-none tracking-tight select-none'>
      {hours}:{minutes}:{seconds}
    </span>
  );
};

export default Timer;
