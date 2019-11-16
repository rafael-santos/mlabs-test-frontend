<template>
  <div class="navbar">
    <div class="container px-0 px-lg-3">
      <div class="row no-gutters align-items-center">
        <!-- Logo -->
        <div class="col pl-3 pl-lg-0">
          <img class="navbar__logo" src="@/assets/images/mlabs-logo.svg" />
        </div>
        <!-- Mobile menu button -->
        <div class="col-auto text-right d-lg-none">
          <button class="navbar__menu-button" onclick="void(0);">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <!-- Desktop menu items -->
        <div class="col-auto">
          <div class="row no-gutters align-items-center">
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/" label="Dashboard" icon="dashboard.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/new" label="Agendar Post" icon="schedule.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/schedules" label="Calendário" icon="calendar.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/inbox" label="Inbox" icon="inbox.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/feed" label="Feed" icon="feed.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/workflow" label="Workflow" icon="workflow.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/monitoring" label="Acompanhamento" icon="monitoring.svg" />
            </div>
            <div class="col d-none d-lg-flex">
              <NavbarItem to="/reports" label="Relatórios" icon="reports.svg" />
            </div>
          </div>
        </div>
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