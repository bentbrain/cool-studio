<script setup>
import flower from "@/assets/2.png";
import lounge2 from "@/assets/images/lounge2.webp";

const text = await queryContent("about-page/about-page-content").findOne();

const route = useRoute();
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title> {{ route.name }} | Cool Studio</Title>
        <Link rel="icon" :href="flower" as="script" />
      </Head>
    </Html>
    <Section>
      <div class="text">
        <h1 class="pageTitle">About</h1>
        <img :src="lounge2" alt="Chairs in the Studio" class="mobile" />
        <p v-for="(ps, i) in text.excerpt.children" :key="i">
          {{ ps.children[0].value }}
        </p>
        <NuxtLink to="/contact"><Button>Get in Touch</Button></NuxtLink>
      </div>
      <img :src="lounge2" alt="Chairs in the Studio" class="desktop" />
    </Section>
  </div>
</template>

<style scoped>
h1 {
  grid-column: span 6;
}
a {
  display: inline-block;
  text-decoration: none;
}
.text {
  grid-column: span 6;
}

img.desktop {
  grid-column: span 6;
  width: 100%;
  max-height: 40rem;
  object-fit: cover;
  object-position: bottom;
}

img.mobile {
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  margin-bottom: 1rem;
}

p {
  max-width: 75ch;
  margin-bottom: 1em;
}

@media (max-width: 600px) {
  .text {
    grid-column: 1 / -1;
  }
}
</style>
