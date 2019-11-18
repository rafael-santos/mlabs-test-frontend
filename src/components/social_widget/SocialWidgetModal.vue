<template>
  <modal ref="modal" class="social-widget-modal">
    <template slot='header'>
      <div class="d-inline-block">
        <div class="social-widget-modal__header-icon-container" :class="`social-widget-modal__header-icon-container--${channel.channelKey}`">
          <inline-svg :src="require(`@/assets/images/social_channels/${channel.channelKey}.svg`)"
            class="social-widget-modal__header-icon"/>
        </div>
      </div>
      
      <span>Adicionar {{ channel.name }}</span>
    </template>

    <template slot='body'>
      <Wizard
        ref="wizard"
        :steps="steps"
        :onNext="nextClicked" 
        :onBack="backClicked">
        <div slot="page1">
          <h4>Step 1</h4>
        </div>
        <div slot="page2">
          <h4>Step 2</h4>
        </div>
        <div slot="page3">
          <h4>Step 3</h4>
        </div>
      </Wizard>
    </template>

    <template slot='footer'>
      <button class="btn btn--default" @click="$refs.modal.close()">
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
import Wizard from '@/components/Wizard.vue';

export default {
  props: {
    channel: Object,
    visible: Boolean,
    close: Function
  },
  components: {
    InlineSvg,
    Modal,
    Wizard
  },
  data(){
    return {
      steps: [
        {
          label: 'Perfis',
          slot: 'page1'
        },
        {
          label: 'Segmento',
          slot: 'page2'
        },
        {
          label: 'Concorrentes',
          slot: 'page3'
        }
      ]
    };
  },
  methods: {
    open() {
      this.$refs.modal.open();
    },
    nextClicked(currentPage) {
      console.log('next clicked', currentPage);
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  }
};
</script>

<style lang="scss" scoped>
.social-widget-modal__header-icon-container {
  @include square(30px);
  @include flex-centered;

  border-radius: $default-border-radius;
  margin-right: 16px;
  overflow: hidden;
}

@each $channel in $social-channels {
  .social-widget-modal__header-icon-container--#{$channel}{
    @include social-background-color($channel);
  }
}

.social-widget-modal__header-icon {
  @include square(22px);

  color: var(--color-neutral-white);
}
</style>