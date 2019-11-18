export default {
  saveProfiles: (state, profiles) => {
    state.profiles = profiles;
  },
  saveConnectedProfile: (state, profile) => {
    state.connectedProfiles.push(profile);
  }
};
