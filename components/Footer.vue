<script setup>
import instagram from "@/assets/icons/socials/instagram.webp";
const year = new Date().getFullYear();

const footer = await queryContent("footer").findOne();

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
      <p v-for="(ps, i) in footer.excerpt.children" :key="i">
        {{ ps.children[0].value }}
      </p>

      <p class="copyright">
        <a class="instagram" href="https://instagram.com/coolstudio.jpg"
          ><img :src="instagram" alt=""
        /></a>
        &#169; Cool Studio {{ year }} | Website by
        <a href="https://instagram.com/bent.brain">@bent.brain</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
p {
  line-height: 1.2;
  font-size: 0.8em;
}

.copyright a {
  color: unset;
}

.instagram {
  display: block;
  width: max-content;
  margin: 0 auto;
  margin-block: 0.5rem;
}

.copyright img {
  display: block;
  max-height: 2rem;
}
</style>
