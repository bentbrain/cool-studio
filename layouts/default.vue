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
        <transition name="crumb">
          <BreadCrumbs v-if="route.path != '/'" class="crumbs" :path="route.path.split('/')" />
        </transition>
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
  .crumb-enter-from{
    opacity: 0;
    height: 0;
    padding-block: 0;
    transform: translateY(-15px);
  }
  
  .crumb-enter-active {
    transition:  all .3s ease-out, opacity 0.1s ease;
  }
  .crumb-leave-active {
    transition:  all .3s ease-out, opacity 0.1s ease;
  }
  
  .crumb-enter,
  .crumb-leave-to {
    opacity: 0;
    height: 0;
    padding-block: 0;
    transform: translateY(-15px);
  }
  </style>