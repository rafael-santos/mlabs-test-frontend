<template>
  <div class="topbar">
    <div class="container">
     <div class="row align-items-center topbar__row">
        <div class="col text-left">15/11/2019 19:00:00</div>
        <div class="col text-center">
          <span>Minha conta</span>
          <i class="fas fa-chevron-down ml-2"></i>
        </div>
        <div class="col text-right">
          <i class="fas fa-cog topbar__settings-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.topbar {
  background-color: var(--color-neutral-gray-darkest);
  color: var(--color-neutral-gray-light);
  font-size: rem(12);
  text-transform: uppercase;
}

.topbar__row {
  min-height: 32px;
}

.topbar__settings-icon {
  font-size: rem(16);
}
</style>