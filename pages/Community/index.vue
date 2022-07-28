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
      ><h1 class="pageTitle">{{ route.name }}</h1></Section
    >
  </div>
</template>
