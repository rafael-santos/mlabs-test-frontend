<template>
  <div :class="`social-widget-connected social-widget-connected--${channel.channelKey}`">
    <div class="social-widget-connected__header">
      {{ channel.name }}
    </div>
    <div class="social-widget-connected__body">
      <inline-svg :src="require(`@/assets/images/social_channels/${channel.channelKey}.svg`)"
        class="social-widget-connected__icon"/>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  props: {
    channel: Object
  },
  components: {
    InlineSvg
  }
};
</script>

<style lang="scss" scoped>
.social-widget-connected {
  color: var(--color-neutral-white);
  cursor: pointer;
  height: 100%;
  min-height: 218px;
}

.social-widget-connected:hover {
  @include all-ease;

  box-sizing: content-box;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
  position: relative;
  transform: scale(1.14);
  z-index: 1;
}

@each $channel in $social-channels {
  .social-widget-connected--#{$channel}{
    @include social-background-color($channel);
  }
}

.social-widget-connected__header {
  background-color: rgba(0,0,0,0.2);
  padding: 15px 20px;
}

.social-widget-connected__body {
  padding: 16px;
}

.social-widget-connected__icon {
  @include square(38px);
}
</style>