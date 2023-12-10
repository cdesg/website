<script setup lang="ts">
</script>

<template>
  <footer
    class="mt-16"
    aria-labelledby="footer-heading"
  >
    <h2
      id="footer-heading"
      class="sr-only"
    >
      Site Footer
    </h2>
    <u-container>
      <div class="pt-16 sm:pt-24 lg:pt-16">
        <div
          class="
          border-t border-gray-300 py-10
          flex flex-row justify-between items-center"
        >
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
          <p class="text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {{ new Date().getFullYear() }} <abbr>CDESG</abbr>. All rights reserved.
          </p>
        </div>
      </div>
    </u-container>
  </footer>
</template>

<style>
/* No custom styles needed */
</style>
