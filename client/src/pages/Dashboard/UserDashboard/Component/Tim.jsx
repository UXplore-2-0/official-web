import React, { useEffect } from 'react';

const Tim = () => {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.logwork.com/widget/countdown.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://logwork.com/countdown-timer"
      className="countdown-timer"
      data-timezone="Asia/Colombo"
      data-date="2024-08-24 17:15"
    >
      Countdown Timer
    </a>
  );
};

export default Tim;
