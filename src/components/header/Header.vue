<template>
  <header>
    <Topbar />
    <Navbar />
  </header>
</template>

<script>
import Topbar from '@/components/header/Topbar.vue';
import Navbar from '@/components/header/Navbar.vue';

export default {
  name: 'Header',
  components: {
    Topbar,
    Navbar
  }
};
</script>
