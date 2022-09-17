<script setup>
import flower from "@/assets/2.png";
import tvs from "@/assets/images/tvs.jpg";
import moment from 'moment';
const route = useRoute();
const text = await queryContent("community-page/community-page-content").findOne();

const now = moment().format('LLL')



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
        <h1 class="pageTitle">Community</h1>
        <ContentRenderer :value="text" />
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
