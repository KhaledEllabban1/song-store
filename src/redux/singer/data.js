const data = [
    { name:'singer_1',
         id:1,
         checked:false,
         albums : [
         {name : 'album_1',
          id:1,
          checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)} ,{songName:'song4', id : Math.floor(Math.random() * 1000000)} ,{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}  ]
         },{name : 'album_2',
          id:2,
          checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:3,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:4,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:5,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_6',
            id:6,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:7,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_8',
            id:8,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_9',
            id:9,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_10',
            id:10,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_11',
            id:11,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_12',
            id:12,
            checked:false,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },
       ]
        },
        {
     name:'singer_2',
     id:2,
     checked:false,
     albums : [
         {name : 'album_1',
          id:13,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:14,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:15,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:16,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:17,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_6',
            id:18,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:19,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_8',
            id:20,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_9',
            id:21,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    },
        {
     name:'singer_3',
     id:3,
     checked:false,
     albums : [
         {name : 'album_1',
          id:22,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:23,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:24,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:25,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:26,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_6',
            id:27,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:28,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    },
        {
     name:'singer_4',
     id:4,
     checked:false,
     albums : [
         {name : 'album_1',
          id:29,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_2',
          id:30,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_3',
            id:31,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    },
        {
     name:'singer_5',
     id:5,
     checked:false,
     albums : [
         {name : 'album_1',
          id:32,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:33,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_3',
            id:34,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_4',
            id:35,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_5',
            id:36,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_6',
            id:37,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:38,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_8',
            id:39,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         },{name : 'album_9',
            id:40,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_10',
            id:41,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}, ]
         }
       ]
    },
        {
     name:'singer_6',
     id:6,
     checked:false,
     albums : [
         {name : 'album_1',
          id:42,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:43,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    },
        {
     name:'singer_7',
     id:7,
     checked:false,
     albums : [
         {name : 'album_1',
          id:44,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:45,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:46,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:47,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:48,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_6',
            id:49,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:50,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_8',
            id:51,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_9',
            id:52,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_10',
            id:53,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_11',
            id:53,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    },
        {
     name:'singer_8',
     id:8,
     checked:false,
     albums : [
         {name : 'album_1',
          id:54,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:55,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:56,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:57,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:58,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_6',
            id:59,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:60,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    },
        {
     name:'singer_9',
     id:9,
     checked:false,
     albums : [
         {name : 'album_1',
          id:61,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:62,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:63,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:64,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:65,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_6',
            id:66,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_7',
            id:67,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_8',
            id:68,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_9',
            id:69,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_10',
            id:70,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_11',
            id:71,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_12',
            id:72,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },
       ]
    },
        {
     name:'singer_10',
     id:10,
     checked:false,
     albums : [
         {name : 'album_1',
          id:73,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_2',
          id:74,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_3',
            id:75,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_4',
            id:76,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)},  {songName:'song3', id : Math.floor(Math.random() * 1000000)}, {songName:'song4', id : Math.floor(Math.random() * 1000000)},{songName:'song5', id : Math.floor(Math.random() * 1000000)}, {songName:'song6', id : Math.floor(Math.random() * 1000000)}]
         },{name : 'album_5',
            id:77,
          songs : [{songName:'song1', id : Math.floor(Math.random() * 1000000)}, {songName:'song2', id : Math.floor(Math.random() * 1000000)}]
         }
       ]
    }
    
]
export default data;

// change to album1 to album 100 in name of albums and may be songs too