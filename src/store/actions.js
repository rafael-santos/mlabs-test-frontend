export default {
  addProfilesToStore: ({ commit }, profiles) => {
    commit('saveProfiles', profiles);
  }
};