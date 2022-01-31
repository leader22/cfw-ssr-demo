<script setup>
  const { data } = await useAsyncData('count', () => Promise.resolve(Math.random()))
</script>

<template>
  <p>{{data || "N/A"}}</p>
</template>
