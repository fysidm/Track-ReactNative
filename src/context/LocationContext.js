import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const endRecording = dispatch => () => {};
const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    endRecording,
    addLocation
  },
  {
    recording: false,
    locations: [],
    currentLocation: null
  }
);
