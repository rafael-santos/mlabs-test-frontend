import state from '@/store/state';
import socialChannels from '@/data/social_channels';

describe('export', () => {
  it('initialize state with correct property values', () => {
    expect(state.socialChannels).toEqual(socialChannels);
    expect(state.profiles).toEqual([]);
    expect(state.connectedProfiles).toEqual([]);
  });
});
