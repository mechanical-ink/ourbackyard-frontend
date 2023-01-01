<template>
  <NuxtLink to="/">
    <h1 class="app-logo">
      <span class="visually-hidden">Ourbackyard</span>
    </h1>
  </NuxtLink>
</template>

<style scoped>
.app-logo {
  background-color: var(--color-purple-900);
  height: 80px;
  mask-image: url("~/assets/logo-icon.svg");
  width: 80px;
}

@media screen and (min-width: 47.9375em) {
  .app-logo {
    height: 130px;
    mask-image: url("~/assets/logo.svg");
    width: 500px;
    z-index: var(--layout-bring-to-front);
  }
}

@media screen and (min-width: 63.9375em) {
  .app-logo {
    height: 104px;
    width: 400px;
  }
}
</style>
