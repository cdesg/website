<script setup lang="ts">
</script>

<template>
  <!-- Hero container -->
  <div class="relative isolate pt-14">
    <!-- Floating Blob -->
    <div class="absolute inset-1 flex justify-center items-center -z-10 transform-gpu overflow-hidden opacity-40 blur-3xl">
      <svg
        class="w-[1050px] fill-current text-red-200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M47.6,-58.3C59.8,-46.4,66.7,-29.7,71.5,-11.3C76.3,7.1,78.9,27.1,69.3,36.5C59.7,46,37.8,44.9,19.5,50C1.2,55.2,-13.6,66.5,-22.7,63C-31.8,59.4,-35.3,40.9,-37.7,26.7C-40.1,12.4,-41.4,2.4,-39.3,-6.5C-37.2,-15.4,-31.6,-23.2,-24.5,-36C-17.4,-48.8,-8.7,-66.5,4.5,-71.9C17.6,-77.2,35.3,-70.1,47.6,-58.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
    <u-container>
      <div class="py-24 sm:py-28 lg:pb-40">
        <div class="max-w-5xl lg:max-w-5xl xl:max-w-7xl">
          <!-- Mini Action Bar -->
          <div class="mb-8 flex justify-start">
            <a
              class="inline-block px-3 py-1 text-gray-900 text-sm ring-1 ring-red-700 hover:ring-red-900 rounded-full leading-6 bg-neutral-50"
              href="#"
            >
              Lorem ipsum dolor sit amet
              <span class="font-bold text-red-700">
                Read more <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          </div>
          <!-- Header Title -->
          <h1 class="text-4xl font-bold tracking-tight text-neutral-900 sm:text-7xl xl:text-8xl">
            Dedicated to increasing the visibility of development economics in Canada.
          </h1>
          <!-- Button row -->
          <div class="mt-10 flex items-center justify-start gap-x-6">
            <u-button
              to="#"
              size="xl"
            >
              Learn more about the CDESG
            </u-button>
          </div>
        </div>
      </div>
    </u-container>
  </div>
</template>
