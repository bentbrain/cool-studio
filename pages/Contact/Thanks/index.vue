<script setup></script>

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
