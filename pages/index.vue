<template>
  <div class="container-wrapper">
    <Categories class="categories" />
    <ItemsList class="items" />
  </div>
</template>

<style scoped>
.container-wrapper {
  padding-left: 30px;
}
.categories {
  position: fixed;
  z-index: 10;
}
@media screen and (min-width: 700px) {
  .items {
    padding-left: 300px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 700px) {
  .categories {
    display: none;
  }
}
</style>
