<template>
  <div class="navbar">
    <div class="row align-items-center">
      <div class="col-auto">
        <img src="@/assets/images/mlabs-logo.svg"/>
      </div>
      <div class="col text-right d-lg-none">
        <i class="fas fa-bars navbar__menu-icon"></i>
      </div>
    </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
</template>

<style lang="scss">
.navbar {
  background-color: var(--color-neutral-white);
  border-bottom: 1px solid var(--color-neutral-gray-light);
}

.navbar__menu-icon {
  font-size: rem(22);
}
</style>