import mutations from '@/store/mutations';

import ProfilesService from '@/services/profiles_service';

let state = {};

beforeEach(() => {
  state = {
    profiles: [],
    connectedProfiles: []
  };

  ProfilesService.saveConnectedProfile = jest.fn();
});

describe('export', () => {
  it('defines mutation function', () => {
    expect(typeof mutations.saveProfiles).toBe('function');
    expect(typeof mutations.saveConnectedProfile).toBe('function');
    expect(typeof mutations.saveConnectedProfiles).toBe('function');
  });
});

describe('saveProfiles', () => {
  it('replaces curret state profiles with the new profiles', () => {
    const newProfiles = ['João', 'Pedro', 'Paulo'];

    expect(state.profiles.length).toBe(0);

    mutations.saveProfiles(state, newProfiles);

    expect(state.profiles.length).toBe(3);
    expect(state.profiles).toEqual(newProfiles);
  });
});

describe('saveConnectedProfile', () => {
  const newProfile = 'Evabite';

  it('pushes one new profile to state.connectedProfiles', () => {
    const expected = [newProfile];

    expect(state.connectedProfiles.length).toBe(0);

    mutations.saveConnectedProfile(state, newProfile);

    expect(state.connectedProfiles.length).toBe(1);
    expect(state.connectedProfiles).toEqual(expected);
  });

  it('calls ProfilesService.saveConnectedProfile', () => {
    mutations.saveConnectedProfile(state, newProfile);

    expect(ProfilesService.saveConnectedProfile).toHaveBeenCalledWith(newProfile);
  });
});

describe('saveConnectedProfiles', () => {
  it('replaces curret state connectedProfiles with the new connectedProfiles', () => {
    const newProfiles = ['João', 'Pedro', 'Paulo'];

    expect(state.connectedProfiles.length).toBe(0);

    mutations.saveConnectedProfiles(state, newProfiles);

    expect(state.connectedProfiles.length).toBe(3);
    expect(state.connectedProfiles).toEqual(newProfiles);
  });
});
