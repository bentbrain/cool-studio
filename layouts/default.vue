<script setup>
import base from "@/styles/base.css";
import reset from "@/styles/reset.css";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  setTimeout(scrolltoTop, 300);

  function scrolltoTop() {
    window.scrollTo(0, 0);
  }
});

const route = useRoute();
</script>

<template>
  <div>
    <div class="page-wrapper">
      <div class="content-wrapper">
        <Header />
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>
