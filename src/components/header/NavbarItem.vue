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
  @include all-ease;

  color: inherit;
  height: 64px;
  padding: 15px 18px;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
}

.navbar-item--active {
  background-color: var(--color-neutral-gray-lighter);
}

.navbar-item__icon {
  color: var(--color-neutral-gray-dark);
}

.navbar-item__label {
  @include all-ease;

  opacity: 0;
  font-family: $default-font-family;
  white-space: nowrap;
}

.navbar:hover {
  .navbar-item {
    height: 86px;
  }

  .navbar-item__label {
    opacity: 1;
  }
} 

.navbar-item:hover,
.navbar-item--active {
  .navbar-item__icon {
    color: var(--color-neutral-gray-darker);
  }

  .navbar-item__label {
    color: var(--color-brand-primary-pure);
  }
}
</style>