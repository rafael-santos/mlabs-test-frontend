<template>
  <div class="select-profile">
    <div class="text-center m-3">
      <p class="select-profile__title">Selecione o perfil que deseja gerenciar</p>
      <p class="select-profile__text">A página que procura não está sendo exibida abaixo?</p>
      <a href="" class="select-profile__text d-block">
        Clique aqui e certifique-se de que as permissões de acesso e gerenciamento dessa página tenham sido concedidas.
      </a>
    </div>
    <ul class="select-profile-list">
      <li v-for="(profile, index) in profiles" :key="index" class="select-profile-list__item">
        <label class="d-flex align-items-center">
          <input type="radio" name="selected_profile_id" :value="profile.id"/>
          <div class="select-profile-list__item-picture" :style="profile.picture ? `background-image: url('${profile.picture}')` : ''">

          </div>
          <div class="text-left">
            <div class="select-profile-list__item-name">{{ profile.name }}</div>
            <div class="select-profile-list__item-url">{{ profile.url }}</div>
          </div>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    channel: Object
  },
  data() {
    return {
      profiles: [
        {
          'id': 1,
          'name': 'Pet Shop do Arnaldo',
          'url': 'https://www.facebook.com/pet-shop-do-arnaldo',
          'picture': 'https://picsum.photos/id/237/200/300',
          'channel_key': 'facebook'
        },
        {
          'id': 2,
          'name': 'Buffet Alegria Geral',
          'url': 'https://www.facebook.com/buffet-alegria-geral',
          'picture': 'https://picsum.photos/id/1042/3456/5184',
          'channel_key': 'facebook'
        },
        {
          'id': 3,
          'name': 'Mecânica do Vitão',
          'url': 'https://www.facebook.com/mecanic-do-vitao',
          'picture': 'https://picsum.photos/id/1071/200/200',
          'channel_key': 'facebook'
        },
        {
          'id': 4,
          'name': 'Fica assim então',
          'url': 'https://twitter.com/ficaassimentao',
          'picture': 'https://picsum.photos/id/1080/6858/4574',
          'channel_key': 'twitter'
        },
        {
          'id': 5,
          'name': 'Diogo Diogo',
          'url': 'https://twitter.com/diogodiogodiogodiogo',
          'picture': '',
          'channel_key': 'twitter'
        },
        {
          'id': 6,
          'name': 'Loja Sapatos mais que legais',
          'url': 'http://instagram.com/sapatosmaisquelegais',
          'picture': 'https://picsum.photos/id/18/2500/667',
          'channel_key': 'instagram'
        },
        {
          'id': 7,
          'name': 'Bicicletaria do Alemão',
          'url': 'https://www.instagram.com/bicicletariadoalemao/',
          'picture': 'https://picsum.photos/id/1077/100/100',
          'channel_key': 'instagram'
        },
        {
          'id': 8,
          'name': 'Guia Melhores Lugares SJC',
          'url': 'https://guiamelhoreslugaressjc.com.br',
          'picture': '',
          'channel_key': 'google_analytics'
        },
        {
          'id': 9,
          'name': 'Canal do Slime',
          'url': 'https://www.youtube.com/user/CanalDoSlimeLegal',
          'picture': 'https://picsum.photos/id/157/500/500',
          'channel_key': 'youtube'
        },
        {
          'id': 10,
          'name': 'Tudo sobre skate',
          'url': 'http://pinterest.com/tudosobreskate',
          'picture': 'https://picsum.photos/id/157/300/500',
          'channel_key': 'pinterest'
        },
        {
          'id': 11,
          'name': 'Tech+',
          'url': 'http://pinterest.com/techmais',
          'picture': 'https://picsum.photos/id/160/1000/1000',
          'channel_key': 'pinterest'
        }
      ]
    };
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

.select-profile-list__item:hover {
  background-color: var(--color-support-info-clear);
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