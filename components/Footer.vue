<script setup>
const year = new Date().getFullYear();

onMounted(async () => {
  const footer = document.querySelector("footer");
  const wrapper = document.querySelector(".content-wrapper");
  const footerHeight = footer.offsetHeight;
  wrapper.style.setProperty("--footer-height", footerHeight + "px");
});
</script>

<template>
  <footer ref="footer">
    <div class="text">
      <p>
        Cool Studio acknowledges the Traditional Custodians of country
        throughout Australia and their connections to land, sea and community.
      </p>
      <p>
        We pay our respect to their elders past and present and extend that
        respect to all Aboriginal and Torres Strait Islander peoples today.
      </p>
      <p class="copyright">&#169; Cool Studio {{ year }}</p>
    </div>
  </footer>
</template>

<style scoped>
p {
  line-height: 1.2;
  font-size: 0.8em;
}

.copyright {
  margin-top: 0.5rem;
}
</style>
