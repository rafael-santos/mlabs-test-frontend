<template>
  <div class="navbar">
    <div class="container px-0 px-lg-3">
      <div class="row no-gutters align-items-center">
        <!-- Logo -->
        <div class="col-auto pl-3 pl-lg-0">
          <img class="navbar__logo" src="@/assets/images/mlabs-logo.svg"/>
        </div>
        <!-- Mobile menu button -->
        <div class="col text-right d-lg-none">
          <button class="navbar__menu-button" onclick="void(0);">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <!-- Desktop menu items -->
        <NavbarItem
          to='/'
          label='Dashboard'
          icon='dashboard.svg'
        />
        <NavbarItem
          to='/new'
          label='Agendar Post'
          icon='schedule.svg'
        />
        <NavbarItem
          to='/schedules'
          label='Calendário'
          icon='calendar.svg'
        />
        <NavbarItem
          to='/inbox'
          label='Inbox'
          icon='inbox.svg'
        />
        <NavbarItem
          to='/feed'
          label='Feed'
          icon='feed.svg'
        />
        <NavbarItem
          to='/workflow'
          label='Workflow'
          icon='workflow.svg'
        />
        <NavbarItem
          to='/monitoring'
          label='Acompanhamento'
          icon='monitoring.svg'
        />
        <NavbarItem
          to='/reports'
          label='Relatórios'
          icon='reports.svg'
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarItem from '@/components/header/NavbarItem.vue';

export default {
  components: {
    NavbarItem
  }
};
</script>

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