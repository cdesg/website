<script setup lang="ts">
import appHeader from '@/components/app/app-header/app-header.vue';
import appFooter from '@/components/app/app-footer/app-footer.vue';
import appPage from '@/components/app/app-page/app-page.vue';
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
