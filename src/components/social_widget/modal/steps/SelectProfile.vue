<template>
  <div class="select-profile">
    <div class="text-center m-3">
      <p class="select-profile__title">Selecione o perfil que deseja gerenciar</p>
      <p class="select-profile__text">A página que procura não está sendo exibida abaixo?</p>
      <a href="" class="select-profile__text d-block">
        Clique aqui e certifique-se de que as permissões de acesso
        e gerenciamento dessa página tenham sido concedidas.
      </a>
    </div>
    <ul class="select-profile-list">
      <li v-for="(profile, index) in profiles" :key="index" class="select-profile-list__item">
        <label class="d-flex align-items-center">
          <input type="radio" name="selected_profile_id"
            v-model="selectedProfile"
            :value="profile"
            @change="selectProfile"/>
          <div class="select-profile-list__item-picture"
            :style="profile.picture ? `background-image: url('${profile.picture}')` : ''"></div>
          <div class="text-left">
            <div class="select-profile-list__item-name">{{ profile.name }}</div>
            <div class="select-profile-list__item-url">{{ profile.url }}</div>
          </div>
        </label>
      </li>
      <li v-if="!profiles.length"
        class="select-profile-list__item select-profile-list__item--disabled">
        <div class="select-profile-list__item-name">Nenhum perfil encontrado</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    channel: Object
  },
  data() {
    return {
      selectedProfile: null
    };
  },
  computed: {
    profiles() {
      return this.getProfilesByChannel(this.channel.channelKey);
    },
    ...mapGetters(['getProfilesByChannel'])
  },
  methods: {
    selectProfile() {
      this.$emit('selectProfile', this.selectedProfile);
    }
  }
};
</script>

<style lang="scss" scoped>
$list-border: 1px solid var(--color-neutral-gray-light);

.select-profile__title {
  font-size: rem(20);
}

.select-profile__text {
  font-size: rem(14);
  margin: rem(8) 0;
}

.select-profile-list {
  border-bottom: $list-border;
  border-top: $list-border;
  list-style-type: none;
  margin: 20px 0 0 0;
  max-height: 280px;
  overflow-y: scroll;
  padding: 0;
}

.select-profile-list__item {
  background-color: var(--color-neutral-white);
  cursor: pointer;
  padding: 16px;
}

.select-profile-list__item:not(.select-profile-list__item--disabled):hover {
  background-color: var(--color-support-info-clear);
}

.select-profile-list__item--disabled {
  color: var(--color-font-soft);
  cursor: default;
  text-align: center;
}

.select-profile-list__item + .select-profile-list__item {
 border-top: $list-border;
}

.select-profile-list__item-picture {
  @include square(48px);

  background-color: var(--color-neutral-gray-lighter);
  background-image: url('~@/assets/images/default-social-profile-picture.png');
  background-position: center center;
  background-size: contain;
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
