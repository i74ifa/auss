<script setup lang="ts">
import Layout from "./Layout.vue";
</script>

<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
