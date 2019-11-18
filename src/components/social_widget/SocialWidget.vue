<template>
  <SocialWidgetNew :channel="channel" v-if="!connected" />
</template>

<script>
import SocialWidgetNew from './SocialWidgetNew.vue';

export default {
  props: {
    channel: Object
  },
  components: {
    SocialWidgetNew
  },
  computed: {
    connected() {
      return false;
    }
  }
};
</script>