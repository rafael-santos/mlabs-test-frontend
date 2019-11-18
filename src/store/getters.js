export default {
  profilesByChannel: state => channelKey => state.profiles.filter(profile => profile.channel_key === channelKey)
};
