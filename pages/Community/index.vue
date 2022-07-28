<script setup>
import flower from "@/assets/2.png";
import tvs from "@/assets/images/tvs.jpg";
const route = useRoute();
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>{{ route.name }} | Cool Studio</Title>
        <Link rel="icon" :href="flower" as="script" />
      </Head>
    </Html>
    <Section
      ><div class="text">
        <h1 class="pageTitle">{{ route.name }}</h1>
        <p>
          Cool Studio is all about community and creativity. We love having
          exhibitions, markets, launch parties and any creatively driven event
          you can think of, in our space. Check back soon for updates on
          upcoming events...
        </p>
      </div>
      <img class="tvs" :src="tvs" alt="TVs Stacked" />
    </Section>
  </div>
</template>

<style scoped>
.text {
  grid-column: span 6;
}

.text p {
  max-width: min(65ch, 100%);
}

.tvs {
  grid-column: span 6;
}

@media (max-width: 600px) {
  .text,
  .tvs {
    grid-column: 1 / -1;
  }
}
</style>
