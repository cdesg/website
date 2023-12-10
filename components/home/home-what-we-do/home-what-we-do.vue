<script setup lang="ts">
const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: 'i-heroicons-light-bulb',
  },
];
</script>

<template>
  <section>
    <u-container>
      <div class="py-24 sm:py-32">
        <div class="max-w-2xl lg:max-w-3xl">
          <h2
            class="
          text-3xl
          font-bold
          tracking-tight
          text-gray-900
          sm:text-5xl"
          >
            What we do
          </h2>
          <p class="mt-6 text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis fugit esse consequatur repellat distinctio? Libero, molestiae esse? Molestiae, consequatur.
          </p>
        </div>
        <div class="mt-16 sm:mt-20">
          <ul
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
          >
            <li
              v-for="feature in features"
              :key="feature.name"
              class="flex flex-col border border-gray-200 p-8 rounded-xl"
            >
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-bl from-red-400 to-red-500">
                <u-icon
                  :name="feature.icon"
                  class="border border-red-300 h-6 w-6 bg-white"
                />
              </div>
              <h3 class="mt-3 text-lg font-semibold leading-7 text-gray-900">
                {{ feature.name }}
              </h3>
              <p class="mt-3">
                {{ feature.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </u-container>
  </section>
</template>
