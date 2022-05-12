// this file name starts with lower case. We do this for files that dont export a React component
// This slice file is a Redux thing

import { CAMPSITES } from '../../app/shared/CAMPSITES';

// Below is a selector function.
// Campsites data will be altered here so if we need to change it, we only have to change it here
export const selectAllCampsites = () => {
  return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//   // Gets a random campsite from the CAMPSITES array
//   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};
