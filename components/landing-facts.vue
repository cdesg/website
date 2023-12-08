<script setup>
const faqs = [
  {
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  // More questions...
];
</script>

<template>
  <div class="bg-gray-950">
    <u-container>
      <div class="py-24 sm:pt-32 lg:py-40">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-5">
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-white">
              Frequently asked questions
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-300">
              Can't find the answer you're looking for? Reach out to our <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >customer support</a> team.
            </p>
          </div>
          <div class="mt-10 lg:col-span-7 lg:mt-0">
            <dl class="space-y-10">
              <div
                v-for="faq in faqs"
                :key="faq.question"
              >
                <dt class="text-base font-semibold leading-7 text-white">
                  {{ faq.question }}
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-300">
                  {{ faq.answer }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </u-container>
  </div>
</template>
