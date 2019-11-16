<template>
  <div class="navbar">
    <div class="row no-gutters align-items-center">
      <div class="col-auto">
        <img src="@/assets/images/mlabs-logo.svg"/>
      </div>
      <div class="col text-right d-lg-none">
        <button class="navbar__menu-button" onclick="void(0);">
          <i class="fas fa-bars"></i>
        </button>
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

.navbar__menu-button {
  @include button-reset;
  
  font-size: rem(22);
  min-height: 64px;
  min-width: 64px;
  text-align: center;
}
</style>