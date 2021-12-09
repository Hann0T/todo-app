import React from 'react';

import useLocalStorage from '../Utils/LocalStorage';

import darkThemeIcon from '../img/icon-sun.svg';
import lightThemeIcon from '../img/icon-moon.svg';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('Theme', 'dark-theme');

  const onClick = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  };

  const changeTheme = () => {
    body.classList.add(theme);
    body.dataset.theme = theme;
  };

  const body = document.querySelector('body');
  body.classList.remove(...body.classList);
  changeTheme();

  return (
    <span className='toggle-theme' onClick={onClick}>
      <img
        src={theme === 'dark-theme' ? darkThemeIcon : lightThemeIcon}
        alt='toggle icon'
        className='toggle-theme__icon'
      />
    </span>
  );
};

export default ThemeSwitcher;
