<script setup lang="ts">
const { data: councillors } = await useAsyncData('council', () => queryContent('/ottawa-city').where({ title: 'Councillor' }).find());
</script>

<template>
  <div class="bg-gray-950 text-white">
    <h2>landing-councillors</h2>
    <ul
      v-for="councillor in councillors"
      :key="councillor.name"
    >
      <li>
        <UCard
          class="m-5"
          :ui="{ body: { background: 'bg-gray-950' } }"
        >
          <p>{{ councillor.name }}</p>
          <p>{{ councillor.ward_name }}</p>
        </UCard>
      </li>
    </ul>
  </div>
</template>
