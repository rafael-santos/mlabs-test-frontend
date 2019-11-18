<template>
  <div class="h-100">
    <div class="social-widget-new">
      <span v-if="channel.beta" class="badge badge--secondary badge--medium social-widget-new__badge">Beta</span>
      <div :class="`social-widget-new__icon-container social-widget-new__icon-container--${channel.channelKey}`">
        <inline-svg :src="require(`@/assets/images/social_channels/${channel.channelKey}.svg`)"
          class="social-widget-new__icon"/>
        <i class="far fa-question-circle social-widget-new__help-icon"></i>
      </div>
      <div class="social-widget-new__name my-3">{{ channel.name }}</div>
      <button class="btn btn--primary" @click="$refs.socialWidgetModal.open()">
        Adicionar
      </button>
    </div>
    <SocialWidgetModal ref="socialWidgetModal" :channel="channel"/>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
import SocialWidgetModal from '@/components/social_widget/SocialWidgetModal.vue';

export default {
  props: {
    channel: Object
  },
  components: {
    InlineSvg,
    SocialWidgetModal
  }
};
</script>

<style lang="scss" scoped>
.social-widget-new {
  align-items: center;
  background-color: var(--color-neutral-gray-lighter);
  border: 2px dotted var(--color-neutral-gray-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0 -1px;
  padding: 20px;
}

.social-widget-new__badge {
  position: absolute;
  right: 10px;
  top: 10px;
}

.social-widget-new__icon-container {
  @include circle(60px);
  @include flex-centered;

  position: relative;
  text-align: center;
}

@each $channel in $social-channels {
  .social-widget-new__icon-container--#{$channel}{
    @include social-background-color($channel);
  }
}

.social-widget-new__icon {
  color: var(--color-neutral-white);
}

.social-widget-new__help-icon {
  color: var(--color-neutral-gray-pure);
  cursor: pointer;
  font-size: rem(22);
  position: absolute;
  left: calc(100% + 16px);
  top: 50%;
  transform: translateY(-50%);
}

.social-widget-new__name {
  font-family: $prime-family;
  font-size: rem(20);
  text-transform: uppercase;
  text-align: center;
}
</style>