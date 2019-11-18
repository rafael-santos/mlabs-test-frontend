<template>
  <modal @close="close">
    <template slot='header'>
      <div class="d-inline-block">
        <div :class="`social-widget-new__header-icon-container social-widget-new__header-icon-container--${channel.channelKey}`">
          <inline-svg :src="require(`@/assets/images/social_channels/${channel.channelKey}.svg`)"
            class="social-widget-new__header-icon"/>
        </div>
      </div>
      
      <span>Adicionar {{ channel.name }}</span>
    </template>

    <template slot='footer'>
      <button class="btn btn--default" @click="close">
        Cancelar
      </button>
      <button class="btn btn--success">
        Próximo
      </button>
    </template>
  </modal>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
import Modal from '@/components/Modal.vue';

export default {
  props: {
    channel: Object,
    visible: Boolean,
    close: Function
  },
  components: {
    InlineSvg,
    Modal
  }
};
</script>

<style lang="scss" scoped>
.social-widget-new__header-icon-container {
  @include square(30px);
  @include flex-centered;

  border-radius: $default-border-radius;
  margin-right: 16px;
  overflow: hidden;
}

@each $channel in $social-channels {
  .social-widget-new__header-icon-container--#{$channel}{
    @include social-background-color($channel);
  }
}

.social-widget-new__header-icon {
  @include square(22px);

  color: var(--color-neutral-white);
}
</style>