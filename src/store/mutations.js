export default {
  saveProfiles: (state, profiles) => {
    state.profiles = profiles;
  },
  addConnectedProfileToStore: (state, profile) => {
    state.connectedProfiles.push(profile);
  }
};
