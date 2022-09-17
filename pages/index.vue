<script setup>
import interior from "@/assets/images/interior.jpg";
import studio1 from "@/assets/images/studio1.webp";
import lounge1 from "@/assets/images/lounge1.webp";
import email from "@/assets/icons/email.png";
import location from "@/assets/icons/location.png";
import flower from "@/assets/2.png";
import {micromark} from 'micromark'

const newIntro = await queryContent("home-page/home-page-content").findOne();
const newInfo = await queryContent("info/cool-info").findOne();

</script>

<template>
  <div class="home-page">
    <Html>
      <Head>
        <Title>Cool Studio</Title>
      </Head>
      <Link rel="icon" :href="flower" as="script" />
    </Html>
    <Section style="display: flex" colour="green">
      <span class="home-head" style="grid-column: 1 / -1; grid-row: 1" v-html="micromark(newIntro.headingtext)" ></span>
      <img class="image1" :src="newIntro.imageone" alt="Studio with Light" />
      <img class="image2" :src="newIntro.imagetwo" alt="Lounge Area of Studio" />
    </Section>
    <Section style="display: flex" colour="pink">
      <div
        style="grid-column: 1 / -1; width: min(65ch, 100%); margin: auto"
        class="text"
      >
        <h2>About</h2>
        <img class="circle" :src="newIntro.image" alt="Props in the Studio" />
        <div v-html="micromark(newIntro.maintext)" ></div>
        <NuxtLink
          to="/about"
          style="
            display: inline-block;
            text-decoration: unset;
            margin-left: auto;
          "
          ><Button>Find out More</Button></NuxtLink
        >
      </div>
    </Section>
    <Section
      style="display: flex; min-height: unset; padding-block: 5rem"
      colour="yellow"
    >
      <div class="flex">
        <BigButton
          class="f-button"
          style="grid-column: span 4"
          colour="orange"
          link="/studio"
          >The Studio</BigButton
        >
        <BigButton
          class="f-button"
          style="grid-column: span 4"
          colour="green"
          link="/residents"
          >Residents</BigButton
        >
        <BigButton
          class="f-button"
          style="grid-column: span 4"
          colour="pink"
          link="/community"
          >Community</BigButton
        >
      </div>
    </Section>
    <Section id="contact" style="display: flex" colour="orange">
      <div style="grid-column: 1 / -1; width: min(65ch, 100%); margin: auto">
        <h2>Contact Us</h2>
      </div>
      <iframe
        src="https://snazzymaps.com/embed/410760"
        width="100%"
        style=""
      ></iframe>
      <div style="grid-column: span 4; align-self: end" class="text">
        <div class="contact-grid">
          <img :src="location" alt="" />
          <div v-html="micromark(newInfo.address)" ></div>
          <img :src="email" alt="" />
          <p>
            <a :href="`mailto:${newInfo.email}`">{{newInfo.email}}</a>
          </p>
          <div class="subdiv" v-for="(social, i) in newInfo.socials" :key="i" >
          <img :src="social.icon" :alt="`${social.platform} Icon`">
          <a :href="social.url">
          {{social.title}}
          </a>
          </div>
        </div>
        <NuxtLink
          to="/contact"
          style="
            display: inline-block;
            text-decoration: unset;
            margin-left: auto;
          "
          ><Button style="margin-bottom: 0">Get in Touch</Button></NuxtLink
        >
      </div>
    </Section>
  </div>
</template>

<style lang="scss" >

.home-page {



.f-button:nth-child(1) {
  transform: translate(0rem, -5rem);
}

.f-button:nth-child(2) {
  transform: translate(-3rem, 3rem);
}

.f-button:nth-child(3) {
  transform: translate(-5rem, -4rem);
}

.image1 {
  grid-column: 3 / span 3;
  grid-row: 1;
  z-index: -1;
  place-self: center;
  margin-top: 10rem;
}

.image2 {
  grid-column: 6 / span 6;
  grid-row: 1;
  z-index: -1;
  place-self: center;
  margin-top: 5rem;
}

.flex {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  grid-column: 1 / -1;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  text-align: left;
  gap: 1rem;
  line-height: 1.2;

  .subdiv {
    grid-column: 1 / -1;
    display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  text-align: left;
  gap: 1rem;
  line-height: 1.2;
  }

  img {
    filter: brightness(0) invert(100%) ;
  }
}

.home-head h1 {
  font-weight: 500;
}

.contact-grid a {
  color: white;
}

.contact-grid img {
  max-height: 1.7rem;
  max-width: 1.5rem;
  place-self: center;
}

.grid > iframe {
  border: none;
  aspect-ratio: 16/9;
  grid-column: span 8;
}

@media (max-width: 600px) {
  .f-button:nth-child(1) {
    transform: translate(-2rem, 0rem);
  }

  .f-button:nth-child(2) {
    transform: translate(1.5rem, 0rem);
  }

  .f-button:nth-child(3) {
    transform: translate(1rem, 0rem);
  }
  .image1 {
    grid-column: 1 / span 6;
    grid-row: 1;
  }

  .grid > iframe,
  .grid .text {
    grid-column: 1 / -1 !important;
  }

  .flex {
    flex-direction: column;
  }

  .flex > * {
    flex-basis: 1;
    flex: 1;
  }

  .image2 {
    grid-column: 6 / span 7;
    grid-row: 1;
    transform: translateY(1rem);
  }
}
}
</style>
