export default {
  profilesByChannel(state) {
    return channelKey => state.profiles.filter(profile => profile.channel_key === channelKey);
  }
};
