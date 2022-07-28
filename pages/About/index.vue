<script setup>
import flower from "@/assets/2.png";
import lounge2 from "@/assets/images/lounge2.webp";
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
    <Section>
      <div class="text">
        <h1 class="pageTitle">{{ route.name }}</h1>
        <img :src="lounge2" alt="Chairs in the Studio" class="mobile" />
        <p>
          Cool Studio was founded by young creatives who have a passion for
          individuality and DIY self expression. We are here to provide an
          affordable and accessible creative space for emerging artists,
          students and local brands and businesses. Our community is important
          to us and we want everyone to enjoy our space as much as we do.
        </p>
        <p>
          Along with studio hire, we also offer packages if you require a
          photographer, videographer, director or stylist for your shoot. We
          also offer residencies where you can receive discounts on studio hire
          and a range of other benefits.
        </p>
        <p>
          We are located a 3 minute drive from Northland shopping centre and a 5
          minute drive from Offshoot Rentals for all extra retail and gear
          requirements.
        </p>
        <p>Please get in touch if you have any questions.</p>
        <p>We would love to hear from you!</p>
        <NuxtLink to="/contact"><Button>Get in Touch</Button></NuxtLink>
      </div>
      <img :src="lounge2" alt="Chairs in the Studio" class="desktop" />
    </Section>
  </div>
</template>

<style scoped>
h1 {
  grid-column: span 6;
}
a {
  display: inline-block;
  text-decoration: none;
}
.text {
  grid-column: span 6;
}

img.desktop {
  grid-column: span 6;
  width: 100%;
  max-height: 40rem;
  object-fit: cover;
  object-position: bottom;
}

img.mobile {
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
  margin-bottom: 1rem;
}

p {
  max-width: 75ch;
  margin-bottom: 1em;
}

@media (max-width: 600px) {
  .text {
    grid-column: 1 / -1;
  }
}
</style>
