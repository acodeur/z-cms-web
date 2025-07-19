<template>
  <header></header>

  <div class="wrapper">
    <!-- <img class="logo" src="@/assets/logo.png" alt="Zzone Logo" /> -->
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/posts">文章</router-link>
      <router-link to="/categories">分类</router-link>
      <router-link to="/tags">标签</router-link>
      <router-link to="/users">用户</router-link>
      <router-link to="/settings">设置</router-link>
    </nav>
  </div>
  <div>App</div>
  <main></main>
</template>

<script setup lang="ts">
import main from '@view/main/Main.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
