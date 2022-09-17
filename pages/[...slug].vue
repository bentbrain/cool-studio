<script setup>
import flower from "@/assets/2.png";
import tvs from "@/assets/images/tvs.jpg";

const route = useRoute();

const content = await queryContent().where({ _path: route.path }).findOne()

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
      <h2 v-if="route.path.includes('community/')" class="datehead">{{new Date(content.time).toLocaleDateString()}}</h2>
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

<style >

.datehead {
  margin-bottom: 0;
}


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
