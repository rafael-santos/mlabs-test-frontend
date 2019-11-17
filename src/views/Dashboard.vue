<template>
  <div class="dashboard-view-container">
    <div class="container">
        <div class="row no-gutters align-items-stretch">
        <template v-for="(channel, index) in socialNetworks">
          <div :key="index" class="col-md-4 col-lg-3 col-xl social-widget-col">
            <SocialWidget />
          </div>
          <div :key="index" v-if="(index + 1) % 5 === 0" class="w-100 d-none d-xl-block"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SocialWidget from '@/components/social_widget/SocialWidget.vue';

export default {
  components: {
    SocialWidget
  },
  data() {
    return {
      socialNetworks: [
        { channelKey: 'facebook', name: 'Facebook' },
        { channelKey: 'twitter', name: 'Twitter' },
        { channelKey: 'instagram', name: 'Instagram' },
        { channelKey: 'google_my_business', name: 'Google meu negócio' },
        { channelKey: 'pinterest', name: 'Pinterest' },
        { channelKey: 'linkedin', name: 'Linkedin' },
        { channelKey: 'youtube', name: 'Youtube' },
        { channelKey: 'whatsapp', name: 'WhatsApp' },
        { channelKey: 'whatsapp', name: 'WhatsApp' },
        { channelKey: 'whatsapp', name: 'WhatsApp' },
        { channelKey: 'whatsapp', name: 'WhatsApp' },
        { channelKey: 'whatsapp', name: 'WhatsApp' },
        { channelKey: 'whatsapp', name: 'WhatsApp' },
        { channelKey: 'google_analytics', name: 'Google Analytics' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard-view-container {
  margin: 40px 0 80px 0;
}

.social-widget-col {
  @media (min-width: $screen-lg-min) {
    max-width: 20%;
  }
}
</style>
