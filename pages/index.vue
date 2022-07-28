<script setup>
import interior from "@/assets/interior.jpg";
import email from "@/assets/icons/email.png";
import instagram from "@/assets/icons/instagram.png";
import location from "@/assets/icons/location.png";
import flower from "@/assets/2.png";
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
      <h1 style="grid-column: 1 / -1; grid-row: 1">
        COOL STUDIO
        <span class="light">IS A CREATIVE STUDIO AND ART SPACE.</span>
      </h1>
      <img
        class="image1"
        src="https://static.wixstatic.com/media/7ba49e_7b7b70ea74034b6bac8ea7a0cf6497b4~mv2.jpg/v1/fill/w_444,h_666,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cool%20Studio-10.jpg"
        alt=""
      />
      <img
        class="image2"
        src="https://static.wixstatic.com/media/7ba49e_18e0446ac9e440668884e89f2a36a504~mv2.jpg/v1/fill/w_1200,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cool%20Studio-2.jpg"
        alt=""
      />
    </Section>
    <Section style="display: flex" colour="pink">
      <div
        style="grid-column: 1 / -1; width: min(65ch, 100%); margin: auto"
        class="text"
      >
        <h2>About</h2>
        <img class="circle" :src="interior" alt="" />
        <p>
          Cool Studio is a creative studio space for hire in Naarm/Melbourne.
          Our retro inspired converted warehouse features a large white
          cyclorama, makeup station, kitchenette, bathroom facilities and three
          phase power. The studio offers controlled lighting or natural
          lighting, with a large window and roller door giving the option to
          flood the studio with beautiful daylight. ​ Cool Studio appeals to
          emerging creatives with our affordable hiring rates and flexible
          booking times. We also offer the option of assistance from our
          resident creatives.
        </p>
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
          <p>
            Factory 2, 5 Kolora Road <br />
            Heidelberg West, VIC 3081
          </p>
          <img :src="email" alt="" />
          <p>
            <a href="mailto:info@coolstudio.com.au">info@coolstudio.com.au</a>
          </p>
          <img :src="instagram" alt="" />
          <a href="https://www.instagram.com/coolstudio.jpg/"
            >@coolstudio.jpg</a
          >
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

<style scoped>
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
</style>
