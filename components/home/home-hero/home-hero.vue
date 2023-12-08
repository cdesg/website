<script setup lang="ts">
</script>

<template>
  <div class="relative isolate pt-14">
    <div class="absolute inset-0 flex items-center justify-center -z-10 transform-gpu overflow-hidden blur-3xl opacity-40">
      <svg
        class="w-[950px] fill-current text-brand-accent/30 mt-10 ml-60"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M47.6,-58.3C59.8,-46.4,66.7,-29.7,71.5,-11.3C76.3,7.1,78.9,27.1,69.3,36.5C59.7,46,37.8,44.9,19.5,50C1.2,55.2,-13.6,66.5,-22.7,63C-31.8,59.4,-35.3,40.9,-37.7,26.7C-40.1,12.4,-41.4,2.4,-39.3,-6.5C-37.2,-15.4,-31.6,-23.2,-24.5,-36C-17.4,-48.8,-8.7,-66.5,4.5,-71.9C17.6,-77.2,35.3,-70.1,47.6,-58.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
    <div class="py-24 sm:py-28 lg:pb-40">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div class="mb-8 flex justify-start">
          <a
            class="inline-block px-3 py-1 text-gray-900 text-sm ring-1 ring-red-900 hover:ring-brand-accent rounded-full leading-6"
            href="#"
          >
            Lorem ipsum dolor sit amet
            <span class="font-bold text-brand-accent">
              Read more <span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        </div>
        <div class="mx-auto max-5-4xl">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Dedicated to increasing the visibility of development economics in Canada.
          </h1>
          <div class="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="#"
              class="rounded-md bg-brand-accent px-6 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >Learn more about the CDESG</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="false"
    class="relative isolate overflow-hidden bg-gray-950 "
  >
    <div
      class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(70%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-48">
      <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-0 ">
        <div class="mt-24 sm:mt-32 lg:mt-16">
          <a
            href="#"
            class="inline-flex space-x-6"
          >
            <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">What's new</span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
              <span>Just shipped v1.0</span>
            </span>
          </a>
        </div>
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Deploy to the cloud with confidence
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300 ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >Get started</a>
          <a
            href="#"
            class="text-sm font-semibold leading-6 text-white"
          >Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div
        v-if="false"
        class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
      >
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width="2432"
            height="1442"
            class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          >
        </div>
      </div>
    </div>
  </div>
</template>
