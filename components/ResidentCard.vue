<script setup>
import socials from "@/assets/socials.json";
import instagram from "@/assets/icons/socials/instagram.webp";
import facebook from "@/assets/icons/socials/facebook.webp";
import twitter from "@/assets/icons/socials/twitter.webp";
import youtube from "@/assets/icons/socials/youtube.webp";

const props = defineProps({
  resident: Object,
  index: String,
});

const socialImages = {
  instagram: instagram,
  facebook: facebook,
  twitter: twitter,
  youtube: youtube,
};

const colours = ["pink", "yellow", "green", "orange"];


</script>

<template>
  <div class="card" :style="`background-color: var(--${colours[index - 1]})`">
    <div class="top">
      <a v-if="resident.website != ''" :href="resident.website">
        <h2>{{ resident.first_name }}</h2>
      </a>
      <h2 v-else>{{ resident.first_name }}</h2>
      <div class="socials">
        <a v-for="(social, key, i) in resident.socials" :key="i" :href="social"
          ><img :src="socialImages[key]" :alt="`${key} Icon`"
        /></a>
      </div>
    </div>
    <img
      :src="resident.featured_media.image"
      :alt="resident.featured_media.description"
    />
    <p class="caption">
      <strong>{{ resident.featured_media.title }}</strong>
      {{ resident.featured_media.description }}
    </p>
    <p>{{ resident.description }}</p>
  </div>
</template>

<style scoped>
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
