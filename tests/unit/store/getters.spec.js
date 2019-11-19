import getters from '@/store/getters';

import ProfilesAPI from '../../mocks/profiles_api';

const profiles = ProfilesAPI.get().data;
const connectedProfiles = [];

const state = {
  profiles,
  connectedProfiles
};

function getChannelProfiles(channelKey) {
  return profiles.filter(profile => profile.channel_key === channelKey);
}

describe('export', () => {
  it('defines getter function', () => {
    expect(typeof getters.getProfilesByChannel).toBe('function');
    expect(typeof getters.getConnectedProfiles).toBe('function');
  });
});

describe('getProfilesByChannel', () => {
  it('returns only profiles with specified channelKey', () => {
    let channelKey = 'facebook';

    let result = getters.getProfilesByChannel(state)(channelKey);
    let expected = getChannelProfiles(channelKey).length;

    expect(result.length).toBe(expected);

    channelKey = 'youtube';

    result = getters.getProfilesByChannel(state)(channelKey);
    expected = getChannelProfiles(channelKey).length;

    expect(result.length).toBe(expected);
  });
});

describe.only('getConnectedProfiles', () => {
  it('returns only profiles with specified channelKey', () => {
    const channelKey = 'facebook';

    let result = getters.getConnectedProfiles(state)(channelKey);
    expect(result.length).toBe(0);

    const newProfile = { channelKey };
    connectedProfiles.push(newProfile);

    result = getters.getConnectedProfiles(state)(channelKey);
    expect(result.length).toBe(1);
  });
});
