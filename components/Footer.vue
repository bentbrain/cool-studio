<script setup>
import instagram from "@/assets/icons/socials/instagram.webp";
const year = new Date().getFullYear();

const text = await queryContent("footer/footer-text").findOne();
const info = await queryContent("info/cool-info").findOne()

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
      <ContentRenderer class="footer-text" :value="text" />
      <div class="copyright">
        <div class="socials">
          <a v-for="(social, i)  in info.socials" :key=i class="instagram" :href="social.url"
            >
            <img :src="social.icon" :alt="`${social.platform} Icon`">
          </a>
        </div>
        <p>
          &#169; Cool Studio {{ year }} | Website by
          <a href="https://instagram.com/bent.brain">@bent.brain</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" >
footer p {
  line-height: 1.2;
  font-size: 0.8em;
}

.copyright a {
  color: unset;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
    width: max-content;
    margin-inline: unset;
  }
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
