import ProfilesService from '@/services/profiles_service';

export default {
  saveProfiles: (state, profiles) => {
    state.profiles = profiles;
  },
  saveConnectedProfile: (state, profile) => {
    state.connectedProfiles.push(profile);
    ProfilesService.saveConnectedProfile(profile);
  },
  saveConnectedProfiles: (state, profiles) => {
    state.connectedProfiles = profiles;
  }
};
