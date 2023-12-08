<script setup lang="ts">
import appHeader from '@/components/app-header.vue';
import appFooter from '@/components/app-footer.vue';
import appPage from '@/components/app-page.vue';
</script>

<template>
  <app-page>
    <template #header>
      <app-header />
    </template>
    <slot />

    <template #footer>
      <app-footer />
    </template>
  </app-page>
</template>
