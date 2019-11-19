<template>
  <router-link :to="`${to}`" active-class="navbar-item--active" class="navbar-item">
    <div class="row no-gutters align-items-center justify-content-center d-lg-block">
      <div class="col-auto d-lg-block">
        <div class="navbar-item__icon">
          <inline-svg :src="require(`@/assets/images/menu/${icon}`)" />
        </div>
      </div>
      <div class="col d-lg-block">
        <div class="navbar-item__label">{{ label }}</div>
      </div>
    </div>
    <span v-if="newItem" class="badge badge--secondary navbar-item__badge">Novo</span>
  </router-link>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'NavbarItem',
  props: {
    to: String,
    label: String,
    icon: String,
    newItem: Boolean
  },
  components: {
    InlineSvg
  }
};
</script>

<style lang="scss">
.navbar-item {
  @include all-ease;

  color: var(--color-neutral-gray-dark);
  display: block;
  overflow: hidden;
  padding: 8px;
  position: relative;
  text-align: center;
  text-decoration: none;

  @media (min-width: $screen-md-min) {
    height: 64px;
    padding: 15px 10px;
  }

  @media (min-width: $screen-lg-min) {
    padding: 15px 18px;
  }
}

.navbar-item--active {
  background-color: var(--color-neutral-gray-lighter);
}

.navbar-item__icon {
  color: var(--color-neutral-gray-pure);
  font-size: 0;
}

.navbar-item__label {
  @include all-ease;

  color: var(--color-neutral-gray-darkest);
  font-family: $prime-family;
  font-size: rem(13);
  opacity: 0;
  padding-left: 10px;
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;

  @media (min-width: $screen-md-min) {
    padding-left: 0;
    text-align: inherit;
  }

  @media (min-width: $screen-lg-min) {
    margin-top: 5px;
  }
}

.navbar:hover {
  .navbar-item {
    @media (min-width: $screen-md-min) {
       height: 86px;
    }
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

.navbar-item__badge {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: $screen-md-min) {
    left: 50%;
    margin-left: 19px;
    right: initial;
    top: 15px;
    transform: translateY(0);
  }
}
</style>
