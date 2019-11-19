import { shallowMount } from '@vue/test-utils';

import SelectProfile from '@/components/social_widget/modal/steps/SelectProfile.vue';

describe('SelectProfile.vue', () => {
  const channel = { channelKey: 'facebook', name: 'Facebook' };
  const profiles = [{
    id: 1,
    name: 'Pet Shop do Arnaldo',
    url: 'https://www.facebook.com/pet-shop-do-arnaldo',
    picture: 'https://picsum.photos/id/237/200/300',
    channel_key: 'facebook'
  }];

  const getters = {
    getProfilesByChannel: () => profiles
  };

  const mocks = {
    $store: {
      getters
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SelectProfile, {
      propsData: {
        channel
      },
      mocks
    });
  });

  it('register props', () => {
    const { props } = SelectProfile;

    expect(props.channel).toBeDefined();
  });

  it('initialize data with correct values', () => {
    const initialData = SelectProfile.data();

    expect(initialData.selectedProfile).toBeDefined();
    expect(initialData.selectedProfile).toBeNull();
  });

  it('works', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('set selectedProfile when user click in an item on the list', () => {
    expect(wrapper.vm.selectedProfile).toBeNull();

    const profileInput = wrapper.find('input[name="selected_profile_id"]');
    profileInput.trigger('click');

    expect(wrapper.vm.selectedProfile).toEqual(profiles[0]);
  });

  it('emit "selectProfile" with selected profile when user click in an item on the list', () => {
    expect(wrapper.emitted('selectProfile')).toBeFalsy();

    const profileInput = wrapper.find('input[name="selected_profile_id"]');
    profileInput.trigger('click');

    expect(wrapper.emitted('selectProfile')[0]).toEqual([profiles[0]]);
  });
});
