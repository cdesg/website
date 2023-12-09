<script setup lang="ts">
</script>

<template>
  <header>
    <!-- Elevate the container above the hero because of the background blur -->
    <u-container class="z-50">
      <div class="flex items-center justify-between py-6 lg:py-12">
        <h2 class="sr-only">
          Site header
        </h2>

        <nav class="flex lg:flex-1">
          <h3 class="sr-only">
            Site navigation
          </h3>
          <!-- Site logo -->
          <nuxt-link
            to="/"
            class="flex items-center"
          >
            <!-- Convert this to SVG and text -->
            <img
              class="h-12 sm:h-16"
              src="/images/logo/brand.png"
              alt="Logo for the CDESG"
            >
          </nuxt-link>
        </nav>
      </div>
    </u-container>
  </header>
</template>

<style>
/* No custom styles needed */
</style>
