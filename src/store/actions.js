export default {
  addProfilesToStore: ({ commit }, profiles) => {
    commit('saveProfiles', profiles);
  },
  addConnectedProfileToStore: ({ commit }, profile) => {
    commit('saveConnectedProfile', profile);
  },
  addConnectedProfilesToStore: ({ commit }, profile) => {
    commit('saveConnectedProfiles', profile);
  }
};
