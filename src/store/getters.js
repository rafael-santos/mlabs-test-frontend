export default {
  profilesByChannel: (state) => (channelKey) => {
    return state.profiles.filter((profile) => profile['channel_key'] === channelKey);
  }
};