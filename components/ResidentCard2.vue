<script setup>
import {micromark} from 'micromark'

const props = defineProps({
  resident: Object,
});

const caption = micromark(props.resident.featuredtitle)

</script>

<template>
  <div class="card" :style="`background-color: ${resident.color}`">
    <div class="top">
      <a v-if="resident.website != ''" :href="resident.website">
        <h2>{{ resident.name }}</h2>
      </a>
      <h2 v-else>{{ resident.name }}</h2>
      <div class="socials">
        <a v-for="(social, i) in resident.socials" :key="i" :href="social.link"
          ><img :src="social.icon" :alt="`${social.title} Icon`"
        /></a>
      </div>
    </div>
    <img
      :src="resident.thumbnail"
      :alt="resident.featuredtitle"
    />
    <div class="caption" v-html="caption" >
    </div>
    <p>{{ resident.description }}</p>
  </div>
</template>

<style lang='scss' scoped>
a {
  text-decoration: unset;
}

.card img {
  margin-bottom: 0.5rem;
}

a:hover {
  text-decoration: underline;
  color: white;
}
.card {
  padding: 1rem;
  border-radius: 0.5rem;
}

.card h2 {
  color: white;
  background: none;
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
  font-size: clamp(1.7rem, 4vw, 3rem);
  
}
.top {
  display: flex;
  justify-content: space-between;
}
.caption {
  font-size: 0.8rem;
  margin-bottom: 1em;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-block: 0.5em;
  gap: 0;
}

.socials a {
  max-width: 1.5rem;
}

.card {
  margin-bottom: 1rem;
}


@media (max-width: 600px) {
  .card {
    grid-column: 1 / -1 !important;

  }
}
</style>
