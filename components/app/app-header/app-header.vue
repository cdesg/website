<script setup lang="ts">
</script>

<template>
  <div class="z-50">
    <header>
      <u-container>
        <div class="flex items-center justify-between py-6 lg:py-8">
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
  </div>
</template>

<style>
/* No custom styles needed */
</style>
