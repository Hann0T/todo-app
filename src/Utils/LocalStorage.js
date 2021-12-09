import React from 'react';

const useLocalStorage = (localStorageName, initialValue) => {
  let itemParsed = JSON.parse(localStorage.getItem(localStorageName));

  if (!itemParsed) {
    localStorage.setItem(localStorageName, JSON.stringify(initialValue));
    itemParsed = initialValue;
  }

  const [item, setItem] = React.useState(itemParsed);

  const saveItem = (newItem) => {
    let itemStringified = JSON.stringify(newItem);
    localStorage.setItem(localStorageName, itemStringified);
    setItem(newItem);
  };

  return [item, saveItem];
};

export default useLocalStorage;
