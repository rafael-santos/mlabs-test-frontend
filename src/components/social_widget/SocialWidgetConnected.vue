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

.social-widget-connected--facebook {
  background-color: var(--color-social-facebook); 
}

.social-widget-connected--twitter {
  background-color: var(--color-social-twitter); 
}

.social-widget-connected--instagram {
  background: var(--gradient-social-instagram); 
}

.social-widget-connected--google-my-business {
  background: var(--gradient-social-google-my-business); 
}

.social-widget-connected--pinterest {
  background-color: var(--color-social-pinterest); 
}

.social-widget-connected--linkedin {
  background-color: var(--color-social-linkedin); 
}

.social-widget-connected--youtube {
  background-color: var(--color-social-youtube); 
}

.social-widget-connected--whatsapp {
  background: var(--gradient-social-whatsapp); 
}

.social-widget-connected--google-analytics {
  background-color: var(--color-social-google-analytics); 
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