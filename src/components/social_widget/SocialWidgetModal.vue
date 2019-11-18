<template>
  <modal ref="modal" class="social-widget-modal" :dialogCustomClass="'social-widget-dialog'">
    <template slot='header'>
      <div class="d-inline-block">
        <div class="d-flex align-items-center">
          <div class="social-widget-modal__header-icon-container" :class="`social-widget-modal__header-icon-container--${channel.channelKey}`">
            <inline-svg :src="require(`@/assets/images/social_channels/${channel.channelKey}.svg`)"
              class="social-widget-modal__header-icon"/>
          </div>
          <span>Adicionar {{ channel.name }}</span>
        </div>
      </div>
    </template>

    <template slot='body'>
      <Wizard
        ref="wizard"
        :steps="steps"
        :onNext="nextClicked" 
        :onBack="backClicked">
        <div slot="step-1">
          <h4>Step 1</h4>
        </div>
        <div slot="step-2">
          <div class="text-center">
            <p class="social-widget-modal__body-title">Selecione o perfil que deseja gerenciar</p>
            <p class="social-widget-modal__body-text">A página que procura não está sendo exibida abaixo?</p>
            <a href="" class="social-widget-modal__body-text d-block">Clique aqui e certifique-se de que as permissões de acesso e gerenciamento dessa página tenham sido concedidas.</a>
          </div>
        </div>
        <div slot="step-3">
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
          slot: 'step-1'
        },
        {
          label: 'Segmento',
          slot: 'step-2'
        },
        {
          label: 'Concorrentes',
          slot: 'step-3'
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
  },
  mounted() {
    this.$refs.wizard.goTo(1);
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

.social-widget-modal__body-title {
  font-size: rem(20);
}

.social-widget-modal__body-text {
  font-size: rem(14);
  margin: rem(8) 0;
}

</style>

<style lang="scss">
.social-widget-modal .modal__dialog {
  margin: 0 8px;
  max-width: 600px;
  width: 100%;

  @media (min-width: $screen-sm-min) {
    margin: 0;
  }
}
</style>