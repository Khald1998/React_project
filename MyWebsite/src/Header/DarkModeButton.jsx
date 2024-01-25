import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';

function DarkModeButton({ darkMode, setDarkMode }) {
  const [opacity, setOpacity] = useState(true);

  const handleClick = () => {
    setOpacity(false);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setOpacity(true);
    }, 200); // 200ms for fade out transition
  };

  return (
    <div className=''>
      <button
        onClick={handleClick}
        className="ml-2 p-2 rounded bg-transparent border-none h-full "
      >
        {darkMode ? (
          <Icon
            path={mdiWhiteBalanceSunny}
            size={1}
            className={`dark:text-whitey text-blacky hover:text-tertiary dark:hover:text-tertiary transition-all duration-200 ${opacity ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <Icon
            path={mdiWeatherNight}
            size={1}
            className={`dark:text-whitey text-blacky hover:text-tertiary dark:hover:text-tertiary transition-all duration-200 ${opacity ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </button>
    </div>
  );
}

export default DarkModeButton;
