<template>
  <transition name="modal">
    <div class="modal__backdrop">
      <div class="modal__dialog" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header id="modalTitle" class="modal__header">
          <slot name="header">
            Modal title
          </slot>
          <button
            type="button"
            class="modal__close"
            @click="close"
            aria-label="Close modal"
          >
            <i class="fas fa-times"></i>
          </button>
        </header>
        <section id="modalDescription" class="modal__body">
          <slot name="body">
            Modal content
          </slot>
        </section>
        <footer class="modal__footer">
          <slot name="footer">
            <button
              type="button"
              class="btn"
              @click="close"
              aria-label="Close modal"
            >
              Cancelar
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
  .modal__backdrop {
    @include z-index('modal-backdrop');

    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .modal__dialog {
    background-color: var(--color-neutral-gray-lightest);
    border-radius: $default-border-radius;
    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    overflow-x: auto;
  }

  .modal__header,
  .modal__footer {
    display: flex;
    padding: 16px;
  }

  .modal__header {
    align-items: center;
    background-color: var(--color-neutral-white);
    border-bottom: 1px solid var(--color-neutral-gray-light);
    color: var(--color-neutral-black);
    font-weight: $font-weight-bold;
    justify-content: space-between;
  }

  .modal__close {
    @include button-reset;
    @include square(20px);

    box-sizing: content-box;
    color: var(--color-neutral-black);
    font-size: 20px;
    margin: -10px -10px -10px 0;
    opacity: 0.8;
    padding: 10px;
  }

  .modal__close:hover {
    opacity: 1;
  }

  .modal__body {
    position: relative;
  }

  .modal__footer {
    justify-content: space-between;
  }
</style>