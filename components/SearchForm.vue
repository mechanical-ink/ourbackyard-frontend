<template>
  <main class="search-component-container" :class="{ homepage: isHome }">
    <div class="lead-content">
      <h1 class="main-page-title">Find Local. <span>Support Local.</span></h1>
      <p>
        Do you own a local business? Sign up for free today and advertise your
        services to your local community.
      </p>
    </div>
    <form name="search" action="/search" method="get" class="main-search-form">
      <fieldset class="search-elements-container">
        <legend class="visually-hidden">Find a local business</legend>
        <div class="form-input-group">
          <label class="visually-hidden" for="q"
            >What are you looking for?</label
          >
          <input
            type="search"
            name="q"
            id="q"
            placeholder="What are you looking for?"
          />
        </div>
        <button type="submit" class="button button-primary">Search</button>
      </fieldset>
    </form>
  </main>
</template>

<script setup>
const { isHome } = defineProps(["isHome"]);
</script>

<style scoped>
.search-component-container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: var(--layout-default-spacing);
}

.search-component-container.homepage {
  margin: auto;
  max-width: 62.5em;
}

.main-page-title {
  margin-top: var(--layout-default-spacing);
}

.main-page-title span {
  display: block;
}

[type="search"] {
  padding: var(--forms-input-padding);
  width: 100%;
}

[type="submit"] {
  margin-top: 1.2rem;
  width: 100%;
}

@media screen and (min-width: 47.9375em) {
  .main-page-title span {
    display: initial;
  }

  .search-elements-container {
    display: flex;
    gap: var(--layout-default-spacing);
  }

  .form-input-group {
    flex: 1 1 70%;
  }

  [type="submit"] {
    flex: 1 1 30%;
    margin-top: initial;
    width: auto;
  }
}
</style>
