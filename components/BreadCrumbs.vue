<script setup>
const props = defineProps({
  path: Array,
});

var fk = props.path;

var test = [];

props.path.forEach((a, i) => {
  test.push(fk.slice(0, i + 1));
});

const text2 = test.map((x) => x.join("/"));
</script>

<template>
  <div class="crumbs">
    <NuxtLink to="/">home</NuxtLink>
    <span v-for="(p, i) in path" :key="i">
      <span v-show="i > 0" class="slash">/</span>
      <NuxtLink v-show="i > 0" :to="i < path.length - 1 ? text2[i] : ''">
        {{ p.replace("-", " ") }}
      </NuxtLink>
    </span>
  </div>
</template>

<style scoped>
a {
  color: unset;
}

.crumbs {
  display: flex;
  color: grey;
  text-transform: uppercase;
}

.slash {
  margin-inline: 0.5em;
}

@media (max-width: 600px) {
  .crumbs {
    font-size: 0.7em;
  }
}
</style>
