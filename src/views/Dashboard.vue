<template>
  <div class="dashboard-view-container">
    <div class="container">
      <div class="row no-gutters align-items-stretch">
        <template v-for="(channel, index) in socialChannels">
          <div :key="`widget-${index}`" class="col-md-4 col-lg-3 col-xl social-widget-col">
            <SocialWidget :channel="channel" />
          </div>
          <div
            :key="`separator-${index}`"
            v-if="(index + 1) % 5 === 0"
            class="w-100 d-none d-xl-block"
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import SocialWidget from '@/components/social_widget/SocialWidget.vue';
import ProfilesService from '@/services/profiles_service';

export default {
  components: {
    SocialWidget
  },
  computed: {
    ...mapState(['socialChannels'])
  },
  methods: {
    ...mapActions(['addProfilesToStore'])
  },
  async mounted() {
    const profiles = await ProfilesService.getAllProfiles();
    this.addProfilesToStore(profiles);
  }
};
</script>

<style lang="scss" scoped>
.dashboard-view-container {
  margin: 40px 0 80px 0;
}

.social-widget-col {
  margin: -1px 0;

  @media (min-width: $screen-lg-min) {
    max-width: 20%;
  }
}
</style>
