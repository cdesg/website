<script setup lang="ts">
const stats = [
  { id: 1, name: 'No response', value: '12' },
  { id: 2, name: 'Uncertain', value: '10' },
  { id: 3, name: 'Vote yes', value: '4%' },
  { id: 4, name: 'Vote no', value: '2' },
];
</script>

<template>
  <u-container>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Trusted by creators worldwide
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing possimus.
          </p>
        </div>
        <dl class="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 text-center md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.id"
            class="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt class="text-base leading-7 text-gray-700">
              {{ stat.name }}
            </dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </u-container>
</template>
