import React from 'react';

import useLocalStorage from '../Utils/LocalStorage';

import darkThemeIcon from '../img/icon-sun.svg';
import lightThemeIcon from '../img/icon-moon.svg';

const themes = ['dark-theme', 'light-theme'];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('Theme', themes[0]);

  const onClick = () => {
    if (theme === themes[0]) {
      setTheme(themes[1]);
    } else {
      setTheme(themes[0]);
    }
  };

  const changeTheme = () => {
    body.classList.remove(...body.classList);
    body.classList.add(theme);
  };

  const body = document.querySelector('body');
  changeTheme();

  return (
    <span className='toggle-theme' onClick={onClick}>
      <img
        src={theme === themes[0] ? darkThemeIcon : lightThemeIcon}
        alt='toggle icon'
        className='toggle-theme__icon'
      />
    </span>
  );
};

export default ThemeSwitcher;
