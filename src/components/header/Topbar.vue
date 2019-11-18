<template>
  <div class="topbar">
    <div class="container px-0 px-lg-3">
     <div class="row no-gutters align-items-center topbar__row">
        <div class="col-2 text-left">
          <span class="d-none d-lg-inline">15/11/2019 19:00:00</span>
        </div>
        <div class="col text-center">
          <span>Minha conta</span>
          <i class="fas fa-chevron-down ml-2"></i>
        </div>
        <div class="col-2 text-right">
          <button class="topbar__settings-button" onclick="void(0);">
            <i class="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.topbar {
  background-color: var(--color-neutral-gray-darker);
  color: var(--color-neutral-gray-light);
  font-size: rem(12);
  text-transform: uppercase;
}

.topbar__row {
  min-height: 32px;
}

.topbar__settings-button {
  @include button-reset;

  font-size: rem(16);
  min-height: 32px;
  min-width: 42px;
  text-align: center;
}

.topbar__settings-button:hover {
  background-color: var(--color-neutral-gray-darkest);
}
</style>
