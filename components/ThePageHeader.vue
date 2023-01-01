<template>
  <header class="page-header">
    <AppLogo />
    <ThePageHeaderNavigation />
  </header>
</template>

<style scoped>
.page-header {
  align-items: center;
  display: flex;
  gap: var(--layout-default-spacing);
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--layout-max-page-width);
  padding: var(--layout-default-spacing);
  position: relative;
}

@media screen and (min-width: 63.9375em) {
  .page-header {
    padding: var(--layout-medium-spacing);
  }
}
</style>
