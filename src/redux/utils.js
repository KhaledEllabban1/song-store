export const add = (Array, itemToAdd) => {
    const existingItem = Array.find(
        singer => singer.id === itemToAdd.id
    );
  
    if (existingItem) {
      return Array.map(singer =>
        singer.id === itemToAdd.id
          ? { ...singer, quantity: singer.quantity + 1 }
          : singer
      );
    }
  
    return [...Array, { ...itemToAdd, quantity: 1 }];
};

//combine two arrays in one object
// export const checkedArray = (singerArray) => {
//   const singersnames = singerArray.map(el => el.name);
//   const singersCheckedValue = singerArray.map(el => el.checked);
//   // to convert two array key and value into one object { key[array1] : value[array2] }
//   return  singersnames.reduce((acc, value, i) => (acc[value] = singersCheckedValue[i], acc), {});

// }

// render array of checked singers
export const checkedSinger = (Array) => Array.map(el => el.checked);
// toggle function
export const toggleFun = (array, index) => {
  return array.map( (el, indx) => {
          if(index === indx ) {
            return !el;
          } else {
            return el;
          }
        } )
}
