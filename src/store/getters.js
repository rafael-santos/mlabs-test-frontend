export default {
  getProfilesByChannel(state) {
    return channelKey => state.profiles.filter(profile => profile.channel_key === channelKey);
  },
  getConnectedProfiles(state) {
    return channelKey => state.connectedProfiles
      .filter(profile => profile.channelKey === channelKey);
  }
};
