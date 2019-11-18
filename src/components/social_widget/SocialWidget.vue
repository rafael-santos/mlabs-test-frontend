<template>
  <div class="h-100">
    <SocialWidgetNew :channel="channel" v-if="!connected" />
    <SocialWidgetConnected :channel="channel" v-if="connected" />
  </div>
</template>

<script>
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
      return false;
    }
  }
};
</script>