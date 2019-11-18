<template>
  <div class="h-100">
    <SocialWidgetNew :channel="channel" v-if="!connected" />
    <SocialWidgetConnected :channel="channel" v-if="connected" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SocialWidgetNew from '@/components/social_widget/SocialWidgetNew.vue';
import SocialWidgetConnected from '@/components/social_widget/SocialWidgetConnected.vue';

export default {
  props: {
    channel: Object
  },
  components: {
    SocialWidgetNew,
    SocialWidgetConnected
  },
  computed: {
    connected() {
      return this.getConnectedProfiles(this.channel.channelKey).length;
    },
    ...mapGetters(['getConnectedProfiles'])
  }
};
</script>
