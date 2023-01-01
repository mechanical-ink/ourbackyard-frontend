<template>
  <nav aria-label="Main navigation">
    <button
      type="button"
      id="main-menu-toggle"
      class="ghost-button main-menu-toggle"
      :class="{ expanded: showMenu }"
      :aria-expanded="showMenu"
      aria-controls="main-menu"
      :aria-label="showMenu ? 'Hide Menu' : 'Show Menu'"
      @click="showMenu = !showMenu"
    ></button>
    <ul
      id="main-menu"
      class="reset-list page-header-navigation"
      :class="{ show: showMenu }"
    >
      <li v-for="item in mainMenu" :key="item.label">
        <NuxtLink :to="item.url" class="main-menu-link">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const baseMenuItems = [
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
const loggedOutMenuItems = [
  {
    label: "Sign up",
    url: "/signup",
  },
  {
    label: "Login",
    url: "/login",
  },
];
const loggedInMenuItems = [
  {
    label: "Logout",
    url: "/logout",
  },
  {
    label: "Profile",
    url: "/profile",
  },
];
const mainMenu = ref([...baseMenuItems, ...loggedOutMenuItems]);
const showMenu = ref(false);

document.body.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    showMenu.value = false;
  }
});
</script>

<style scoped>
.main-menu-toggle {
  background-color: var(--color-neutral-900);
  height: var(--layout-medium-icon-size);
  mask-image: url("~/assets/icons/open-menu.svg");
  mask-size: cover;
  width: var(--layout-medium-icon-size);
}

@media screen and (min-width: 63.9375em) {
  .main-menu-toggle {
    display: none;
  }
}

.expanded {
  mask-image: url("~/assets/icons/close.svg");
}

.page-header-navigation {
  display: none;
}

.main-menu-link {
  font-size: var(--typography-size-xl);
  text-decoration: none;
}

@media screen and (min-width: 63.9375em) {
  .main-menu-link {
    font-size: var(--typography-size-medium);
  }
}

.show {
  background-color: var(--color-neutral-inverted);
  display: flex;
  flex-direction: column;
  left: 0;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding-left: var(--layout-default-spacing);
  position: absolute;
  top: 100px;
  width: 100%;
}

@media screen and (min-width: 47.9375em) {
  .show {
    top: 100px;
  }
}

@media screen and (min-width: 63.9375em) {
  .page-header-navigation,
  .show {
    display: flex;
    flex-direction: row;
    gap: var(--layout-default-spacing);
    left: initial;
    min-height: initial;
    position: initial;
    top: initial;
  }
}
</style>
