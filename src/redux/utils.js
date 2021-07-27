export const add = (Array, itemToAdd) => {
    const existingItem = Array.find(
        singer => singer.id === itemToAdd.id
    );
  
    if (existingItem) {
      return Array.map(singer =>
        singer.id === itemToAdd.id
          ? { ...singer, quantity: singer.quantity + 1 , checked : true }
          : singer
      );
    }
  
    return [...Array, { ...itemToAdd, quantity: 1 }];
  };
  
export const removeItemFromCart = (Array, cartItemToRemove) => {
    const existingCartItem = Array.find(
      item => item.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return Array.filter(item => item.id !== cartItemToRemove.id);
    }
  
    return Array.map(item =>
        item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  };

// export const saveChanging = (selectedSingersArr, checkedElement) {
//   const existingItem = selectedSingersArr.find (
//     selectedSingersArrEl => selectedSingersArrEl.id === checkedElement.id
//   )
  
//   selectedSingersArr.forEach(selected => {
//       selected.id === checkedElement.id ? setChecked(checked) : setChecked(!checked);
//     })
  
// }