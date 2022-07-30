<script setup>
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
      ><h1 class="pageTitle">Contact</h1>
      <ContactForm style="grid-column: 1 / -1" />
    </Section>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  grid-column: 1 / -1;
  margin-bottom: 2rem;
}
</style>
