<template>
  <div class="h-100">
    <SocialWidgetNew :channel="channel" v-if="!connected" />
    <SocialWidgetConnected :channel="channel" v-if="connected" />
  </div>
</template>

<script>
import SocialWidgetNew from './SocialWidgetNew.vue';
import SocialWidgetConnected from './SocialWidgetConnected.vue';

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
      return true;
    }
  }
};
</script>