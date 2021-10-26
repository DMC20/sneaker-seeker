export const getSavedShoeIds = () => {
  const savedShoeIds = localStorage.getItem('saved_shoes')
    ? JSON.parse(localStorage.getItem('saved_shoes'))
    : [];

  return savedShoeIds;
};

export const saveShoeIds = (ShoeIdArr) => {
  if (ShoeIdArr.length) {
    localStorage.setItem('saved_shoes', JSON.stringify(ShoeIdArr));
  } else {
    localStorage.removeItem('saved_shoes');
  }
};

export const removeBookId = (shoeId) => {
  const savedShoeIds = localStorage.getItem('saved_shoes')
    ? JSON.parse(localStorage.getItem('saved_shoes'))
    : null;

  if (!savedShoeIds) {
    return false;
  }

  const updatedSavedBookIds = savedShoeIds?.filter((savedShoeId) => savedShoeId !== shoeId);
  localStorage.setItem('saved_shoes', JSON.stringify(updatedSavedBShoesIds));

  return true;
};