<template>
  <modal @close="close">
    <div slot='header'>Nome da modal</div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  props: {
    channel: Object,
    visible: Boolean,
    close: Function
  },
  components: {
    Modal
  }
};
</script>

<style>

</style>