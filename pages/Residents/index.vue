<script setup>
import data from "@/assets/residents/residents.json";
import flower from "@/assets/2.png";
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
      ><h1 class="pageTitle">{{ route.name }}</h1>
      <ResidentCard
        class="resident"
        v-for="(resident, i) in data"
        :key="i"
        :resident="resident"
        :index="i"
      />
    </Section>
  </div>
</template>

<style scoped>
.resident {
  grid-column: span 6;
}
h1 {
  grid-column: 1 / -1;
}
</style>
