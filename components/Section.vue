<script setup>
const props = defineProps({
  colour: String,
});
</script>

<template>
  <section :class="colour">
    <div class="grid"><slot /></div>
  </section>
</template>

<style scoped>
.grid {
  position: relative;
  isolation: isolate;
  display: grid;
  width: min(80rem, 100%);
  padding: 4rem clamp(1rem, 3vw, 2rem);
  gap: 1rem;
  margin: 0 auto;
  place-self: center;
  grid-template-columns: repeat(12, 1fr);
  height: 100%;
}

@media (max-width: 600px) {
  .grid {
    row-gap: 2rem;
  }
}
</style>
