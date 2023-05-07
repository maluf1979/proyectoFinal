<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home|</RouterLink>
        <RouterLink to="/about">About|</RouterLink>
        <RouterLink to="/paquetes">Paquetes</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
