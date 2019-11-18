<template>
  <div class="social-widget-new">
    <div :class="`social-widget-new__icon social-widget-new__icon--${channel.channelKey}`"></div>
    <div class="social-widget-new__name">{{ channel.name }}</div>
    <button class="btn btn--primary">
      Adicionar
    </button>
  </div>
</template>

<script>
export default {
  props: {
    channel: Object
  }
};
</script>

<style lang="scss" scoped>
.social-widget-new {
  background-color: var(--color-neutral-gray-lighter);
  border: 2px dotted var(--color-neutral-gray-light);
  margin: -1px;
}

.social-widget-new__icon {
  text-align: e
}
</style>