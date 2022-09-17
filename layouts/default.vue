<script setup>
import base from "@/styles/base.css";
import reset from "@/styles/reset.css";


const route = useRoute();

const nuxtApp = useNuxtApp();

const navHide = ref(false)

nuxtApp.hook("page:finish", () => {
  setTimeout(scrolltoTop, 300);

  function scrolltoTop() {
    window.scrollTo(0, 0);
  }
});

onMounted(() => {
  const headerHeight = document.querySelector('header.header').offsetHeight
  const fullHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight

  
  var lastScrollTop = 0;
  window.addEventListener("scroll", function(){ 

    var st = window.pageYOffset || document.documentElement.scrollTop; 

   if (st > lastScrollTop && st > headerHeight){
      navHide.value = true
   } else {
    navHide.value = false
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
})


</script>

<template>
  <div>
    <Header class="header" :class="navHide && 'hidden'" />
    <div class="page-wrapper">
      <div class="content-wrapper">
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

  .header {
    position: sticky;
    top: 0;
    transition: 0.3s ease;
  }

  .hidden {
    transform: translateY(-100%);
  }
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