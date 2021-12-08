const useLocalStorage = (localStorageName, localStorageItem) => {
  if (!localStorage.getItem(localStorageName)) {
    localStorage.setItem(localStorageName, JSON.stringify(localStorageItem));
  }

  const item = (localStorageItem) => {
    let itemLocalStorage = localStorage.getItem(localStorageItem);
    let item = JSON.parse(itemLocalStorage);
    return item;
  };

  const setItem = (item) => {
    let itemStringified = JSON.stringify(item);
    localStorage.setItem(localStorageName, itemStringified);
  };

  return { item, setItem };
};

export default useLocalStorage;
