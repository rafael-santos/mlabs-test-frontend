<template>
  <div class="topbar">
    <div class="container">
     <div class="row align-items-center topbar__row">
        <div class="col text-left">Data</div>
        <div class="col text-center">Minha conta</div>
        <div class="col text-right">Opções</div>
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
</style>