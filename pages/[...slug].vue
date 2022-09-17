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
    <Section>
      <ContentDoc class="content"
        ><template #not-found>
          <div class="text">
            <h1>Whoopsie</h1>
            <p>Sorry, we couldn't find that page.</p>
            <NuxtLink to="/"><Button>Home</Button></NuxtLink>
          </div>
        </template>
      </ContentDoc></Section
    >
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-column: 1 / -1;
}

.content img {
  max-width: min(40rem, 100%);
  margin-block: 2rem;
}

.text {
  grid-column: 1 / -1;
}

a {
  display: inline-block;
  text-decoration: none;
}

</style>
