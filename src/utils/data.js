const cards = [
  {
    id: 'card-1',
    title: 'Learning how to cook',
    link: "https://www.youtube.com/embed/C0DPdy98e4c",
  },
  {
    id: 'card-2',
    title: 'Making sandwich',
    link: "https://www.youtube.com/embed/C0DPdy98e4c",
  },
  // {
  //   id: 'card-3',
  //   title: 'Taking the trash out',
  //   link: "https://www.youtube.com/embed/C0DPdy98e4c"
  // },
];

const cards2 = [
  {
    id: 'card-4',
    title: 'Learning how',
    link: "https://www.youtube.com/embed/C0DPdy98e4c"
  },
  {
    id: 'card-5',
    title: 'Making ich',
    link: "https://www.youtube.com/embed/C0DPdy98e4c"
  },
  // {
  //   id: 'card-6',
  //   title: ' trash out',
  //   link: "https://www.youtube.com/embed/C0DPdy98e4c"
  // },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Bucket - 1',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Bucket - 2',
      cards: cards2,
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;



/*
,
    'list-2': {
      id: 'list-2',
      title: 'Doing',
      cards: [],
    },
  },
  ,
*/