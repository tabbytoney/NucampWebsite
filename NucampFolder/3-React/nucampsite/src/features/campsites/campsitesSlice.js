// this file name starts with lower case. We do this for files that dont export a React component
// This slice file is a Redux thing

import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campsitesArray: CAMPSITES,
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

// Below is a selector function.
// Campsites data will be altered here so if we need to change it, we only have to change it here
export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

// export const selectRandomCampsite = () => {
//   // Gets a random campsite from the CAMPSITES array
//   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
