<script setup>
import flower from "@/assets/2.png";
import { useLocalStorage } from "@vueuse/core";

const storageName = useLocalStorage("name");
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
        <h1 class="pageTitle">Thanks!</h1>
        <p>Keep an eye on your email, we'll be in touch.</p>
        <NuxtLink to="/"><Button>Home</Button></NuxtLink>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.text {
  text-align: center;
  grid-column: 1 / -1;
  margin-bottom: 2rem;
}

p {
  font-size: clamp(1rem, 3vw, 2rem);
}

.text a {
  display: inline-block;
  margin: 0 auto;
  text-decoration: none;
}
</style>
