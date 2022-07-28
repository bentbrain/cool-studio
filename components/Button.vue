<script setup>
import flower from "@/assets/2.png";

const props = defineProps({
  title: String,
});
</script>

<template>
  <button>
    <slot />
    <img :src="flower" alt="" />
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  outline: unset;
  border: unset;
  padding: 0.2rem 1rem;
  border-radius: 100vw;
  margin-block: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  background: var(--green);
  color: white;
}

button:hover {
  cursor: pointer;
}

button:hover img {
  transform: rotate(180deg);
}

img {
  transition: all 0.7s cubic-bezier(0, 0.56, 0.01, 0.96);
  max-width: 2rem;
  filter: brightness(10) saturate(0);
}
</style>
