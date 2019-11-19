<template>
  <div class="navbar">
    <div class="container px-0 px-lg-3">
      <div class="row no-gutters align-items-center">
        <!-- Logo -->
        <div class="col pl-3 pl-lg-0">
          <img class="navbar__logo" src="@/assets/images/mlabs-logo.svg" />
        </div>

        <div class="col-auto text-right">
          <div class="navbar__menu-toggle" onclick="void(0);">
            <!-- Mobile menu button -->
            <button class="navbar__menu-button d-lg-none">
              <i class="fas fa-bars"></i>
            </button>
            <!-- Mobile and Desktop menu items -->
            <div class="navbar__menu-items">
              <div class="row no-gutters align-items-center">
                <div class="col-lg">
                  <NavbarItem to="/" label="Dashboard" icon="dashboard.svg" />
                </div>
                <div class="col-lg">
                  <NavbarItem to="/new" label="Agendar Post" icon="schedule.svg" :newItem="true"/>
                </div>
                <div class="col-lg">
                  <NavbarItem to="/schedules" label="Calendário" icon="calendar.svg" />
                </div>
                <div class="col-lg">
                  <NavbarItem to="/inbox" label="Inbox" icon="inbox.svg" />
                </div>
                <div class="col-lg">
                  <NavbarItem to="/feed" label="Feed" icon="feed.svg" />
                </div>
                <div class="col-lg">
                  <NavbarItem to="/workflow" label="Workflow" icon="workflow.svg" />
                </div>
                <div class="col-lg">
                  <NavbarItem to="/monitoring" label="Acompanhamento" icon="monitoring.svg" />
                </div>
                <div class="col-lg">
                  <NavbarItem to="/reports" label="Relatórios" icon="reports.svg" />
                </div>
              </div>
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
  name: 'Navbar',
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

.navbar__menu-button {
  @include button-reset;

  font-size: rem(22);
  min-height: 64px;
  min-width: 64px;
  text-align: center;
}

.navbar__menu-items {
  @include z-index('menu-items');

  background-color: var(--color-neutral-white);
  border-top: 1px solid var(--color-neutral-gray-light);
  box-shadow: 0 5px 10px var(--color-neutral-gray-light);
  display: none;

  @media (min-width: $screen-md-min) {
    border-top: 0;
    box-shadow: none;
    display: flex;
  }
}

@media (max-width: $screen-sm-max) {
  .navbar__menu-toggle:hover .navbar__menu-items {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
  }
}

@media (min-width: $screen-md-min) {
  .navbar:hover .navbar__logo {
    height: 56px;
  }
}
</style>
