import { speakersAPI } from '../Api/Api';

const GET_SPEAKERS = 'GET_SPEAKERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  speakers: [],
  isFetching: true,
};

const speakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPEAKERS:
      return {
        ...state,
        speakers: [...action.speakers],
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const getSpeakersAC = (speakers) => ({
  type: GET_SPEAKERS,
  speakers,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getSpeakersThunk = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await speakersAPI.getSpeakers();
  dispatch(getSpeakersAC(data.response));
  dispatch(toggleIsFetching(false));
};

export default speakersReducer;
