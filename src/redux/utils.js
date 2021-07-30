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

export const remove = (array, itemToRemove) => {
  return array.filter(
    el => el.id !== itemToRemove.id
  )
}

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

// selected Albums
export const selectedAlbum = (array) => {
   const albums = array.map(el => el.albums);
   return flatten(albums)
}
// combine arrays in one array

export const flatten = (arr) => {
    var flat = [];
    for (var i = 0; i < arr.length; i++) {
        flat = flat.concat(arr[i]);
    }
    return flat;
}
// selected Albums
export const selectedSongs = (array) => {
  const songs = array.map(el => el.songs);
  
  return flatten(songs)
}