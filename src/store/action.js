export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};

export const ActionCreator = {
  changeFilterGenre: (genre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre,
  })
};
