<template>
  <div class="navbar">
    <div class="container px-0 px-lg-3">
      <div class="row no-gutters align-items-center">
      <div class="col-auto pl-3 pl-lg-0">
        <img class="navbar__logo" src="@/assets/images/mlabs-logo.svg"/>
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
  </div>
</template>

<style lang="scss">
.navbar {
  background-color: var(--color-neutral-white);
  border-bottom: 1px solid var(--color-neutral-gray-light);
}

.navbar__logo {
  @include all-ease;
  
  height: 40px;
  margin: 10px 0;
}

.navbar:hover .navbar__logo {
 height: 62px;
}

.navbar__menu-button {
  @include button-reset;
  
  font-size: rem(22);
  min-height: 64px;
  min-width: 64px;
  text-align: center;
}
</style>