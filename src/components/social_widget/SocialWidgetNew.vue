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
      <button class="btn btn--primary" @click="showModal">
        Adicionar
      </button>
    </div>
    <SocialWidgetModal v-show="isModalVisible" :channel="channel" :close="closeModal"/>
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
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
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

.social-widget-new__icon-container--facebook {
  background-color: var(--color-social-facebook); 
}

.social-widget-new__icon-container--twitter {
  background-color: var(--color-social-twitter); 
}

.social-widget-new__icon-container--instagram {
  background: var(--gradient-social-instagram); 
}

.social-widget-new__icon-container--google-my-business {
  background: var(--gradient-social-google-my-business); 
}

.social-widget-new__icon-container--pinterest {
  background-color: var(--color-social-pinterest); 
}

.social-widget-new__icon-container--linkedin {
  background-color: var(--color-social-linkedin); 
}

.social-widget-new__icon-container--youtube {
  background-color: var(--color-social-youtube); 
}

.social-widget-new__icon-container--whatsapp {
  background: var(--gradient-social-whatsapp); 
}

.social-widget-new__icon-container--google-analytics {
  background-color: var(--color-social-google-analytics); 
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