<template>
  <div class="select-profile">
    <div class="text-center">
      <p class="select-profile__title">Selecione o perfil que deseja gerenciar</p>
      <p class="select-profile__text">A página que procura não está sendo exibida abaixo?</p>
      <a href="" class="select-profile__text d-block">
        Clique aqui e certifique-se de que as permissões de acesso e gerenciamento dessa página tenham sido concedidas.
      </a>
      <ul class="select-profile-list">
        <li class="select-profile-list__item">
          <label class="d-flex align-items-center">
            <input type="radio" name="selected_profile_id" value="1"/>
            <img class="select-profile-list__item-image"
              src="https://picsum.photos/id/1080/6858/4574"/>
            <div class="text-left">
              <div class="select-profile-list__item-name">Nome da página</div>
              <div class="select-profile-list__item-url">Url da página</div>
            </div>
          </label>
        </li>
      </ul>
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

.select-profile-list {
  border-bottom: 1px solid var(--color-neutral-gray-light);
  border-top: 1px solid var(--color-neutral-gray-light);
  list-style-type: none;
  margin: 20px 0 0 0;
  padding: 0;
}

.select-profile-list__item {
  background-color: var(--color-neutral-white);
  cursor: pointer;
  padding: 16px;
}

.select-profile-list__item:hover {
  background-color: var(--color-support-info-clear);
}

.select-profile-list__item-image {
  @include square(48px);

  background-color: var(--color-neutral-gray-lighter);
  border-radius: $default-border-radius;
  margin: 0 16px;
}

.select-profile-list__item-name {
  font-size: rem(15);
  font-weight: $font-weight-bold;
  margin-bottom: 4px;
}

.select-profile-list__item-url {
  color: var(--color-neutral-gray-dark);
  font-size: rem(13);
}
</style>