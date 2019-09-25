const INITIAL_STATE = {
  sections: [
    {
      title: "waves",
      imageUrl:
        "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
      id: 1,
      linkUrl: "shop/waves"
    },
    {
      title: "islands",
      imageUrl:
        "https://images.unsplash.com/photo-1544550581-1bcabf842b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80",
      id: 2,
      linkUrl: "shop/islands"
    },
    {
      title: "creatures",
      imageUrl:
        "https://images.unsplash.com/photo-1516683169270-7514e272a5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
      id: 3,
      linkUrl: "shop/creatures"
    },
    {
      title: "scuba diving",
      imageUrl:
        "https://images.unsplash.com/photo-1567425928496-1ab66c650131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/scubadiving"
    },
    {
      title: "surfing",
      imageUrl:
        "https://images.unsplash.com/photo-1499823382510-3990e4b8a04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/surfing"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
