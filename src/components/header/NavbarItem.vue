<template>
  <router-link :to="`${to}`" active-class="navbar-item--active" class="navbar-item">
    <div class="navbar-item__icon">
      <inline-svg :src="require(`@/assets/images/menu/${icon}`)" />
    </div>
    <div class="navbar-item__label">{{ label }}</div>
  </router-link>
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>-->
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  props: {
    to: String,
    label: String,
    icon: String
  },
  components: {
    InlineSvg
  }
};
</script>

<style lang="scss">
.navbar-item {
  color: inherit;
  padding: 15px 18px;
  text-align: center;
  text-decoration: none;
}

.navbar-item--active {
  background-color: var(--color-neutral-gray-lighter);
}

.navbar-item__icon {
  color: var(--color-neutral-gray-dark);
}

.navbar-item--active .navbar-item__icon {
  color: var(--color-neutral-gray-darker);
}
</style>