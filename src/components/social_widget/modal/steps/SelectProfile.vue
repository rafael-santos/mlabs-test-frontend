<template>
  <div class="select-profile">
    <div class="text-center">
      <p class="select-profile__title">Selecione o perfil que deseja gerenciar</p>
      <p class="select-profile__text">A página que procura não está sendo exibida abaixo?</p>
      <a href="" class="select-profile__text d-block">
        Clique aqui e certifique-se de que as permissões de acesso e gerenciamento dessa página tenham sido concedidas.
      </a>
    </div>
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
.select-profile__title {
  font-size: rem(20);
}

.select-profile__text {
  font-size: rem(14);
  margin: rem(8) 0;
}
</style>