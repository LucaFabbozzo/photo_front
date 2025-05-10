<script setup>
  import Header from '@/components/Header.vue';
  import Sidebar from '@/components/Sidebar.vue';
  import CookieBanner from '@/components/CookieBanner.vue';
  import '@/assets/global.scss'
</script>

<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view></router-view>
    <CookieBanner />
  </div>
</template>


<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
}

</style>