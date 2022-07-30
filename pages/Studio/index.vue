<script setup>
import flower from "@/assets/2.png";
import studio1 from "@/assets/images/studio1.webp";
import studio2 from "@/assets/images/studio2.webp";
import props from "@/assets/images/props-on-shelf.webp";
const route = useRoute();

const text = await queryContent("studio/text").findOne();
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
        <h1 class="pageTitle">Studio</h1>
        <p v-for="(ps, i) in text.excerpt.children" :key="i">
          {{ ps.children[0].value }}
        </p>
      </div>

      <div class="image-grid">
        <img :src="studio2" alt="Studio Image" />
        <img :src="props" alt="Equipment on Shelf" />

        <img :src="studio1" alt="Studio with Lights" />
      </div>
    </Section>

    <Section>
      <div class="text-full">
        <h2>Rates</h2>
        <table>
          <tr>
            <th>Short Session</th>
            <th>Half Day Session</th>
            <th>Full Day Session</th>
          </tr>
          <tr>
            <td>2 Hours</td>
            <td>4 Hours</td>
            <td>8 Hours</td>
          </tr>
          <tr>
            <td>$160</td>
            <td>$230</td>
            <td>$330</td>
          </tr>
        </table>
        <p style="text-align: center; font-size: 0.8em">
          For student discounts or bookings outside these options, contact us.
          Prices are excl. GST
        </p>
        <NuxtLink
          style="text-decoration: none; display: inline-block"
          to="/contact"
          ><Button style="margin: 1rem auto 2rem">Book Now</Button></NuxtLink
        >
      </div>
      <div class="text-block left">
        <h3>Studio Hire Includes</h3>
        <div class="list-grid">
          <ul>
            <li>Use of All Facilities</li>
            <li>3 Phase Power</li>
            <li>Free Wi-Fi</li>
            <li>6 X 10kg Sandbags</li>
            <li>Tressle Table</li>
          </ul>
          <ul>
            <li>4 X Polyboards With Stands</li>
            <li>Blackout Curtain</li>
            <li>Extension Cables + Power Board</li>
            <li>Step Ladder</li>
          </ul>
          <ul>
            <li>Full Length Ladder</li>
            <li>Trolley</li>
            <li>Industrial Heater</li>
            <li>Free Standing Mirror</li>
          </ul>
        </div>
      </div>
      <div class="text-block right">
        <h3>Available Extras</h3>
        <ul class="full">
          <li>
            Lighting Hire - $100 (see gear list
            <NuxtLink to="/studio/equipment">here</NuxtLink>)
          </li>
          <li>Cyclorama Repaint - $80</li>
          <li>Coloured Backdrop Hire - $70</li>
        </ul>
      </div>
    </Section>
  </div>
</template>

<style scoped>
h1 {
  grid-column: span 6;
}

h3 {
  font-size: 2rem;
  grid-column: 1 / -1;
  margin-bottom: 0.5em;
}

ul {
  list-style-position: outside;
  list-style-type: none;
  padding: 0;
  line-height: 1.2;

  margin-block: auto;
}

ul li {
  margin-bottom: 0.5em;
}
.text {
  grid-column: 1 / span 6;
}

.text-block {
  grid-column: span 6;
  text-align: center;
  color: white;

  border-radius: 0.5rem;
  padding-block: 2rem;
  padding-inline: 1rem;
}

.text-block a {
  color: white;
}

.text-block.left {
  background-color: var(--pink);
}

.text-block.right {
  background-color: var(--orange);
  display: flex;
  flex-direction: column;
}

.list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
}

.text-full {
  grid-column: 1 / -1;
  width: min(65ch, 100%);
  margin: 0 auto;
  text-align: center;
}

.image-grid {
  grid-column: span 6;
  grid-row: span 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: min-content;
}

.image-grid img:first-of-type {
  grid-column: span 2;
  grid-row: span 2;
  object-fit: cover;
}

table {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  line-height: 1;
  margin-bottom: 0.5rem;
  table-layout: fixed;
}

tr:nth-child(2) {
  background: var(--orange);
}

tr:nth-child(3) {
  background: var(--yellow);
}

tr:hover {
  filter: brightness(1.03);
}

tr:first-of-type {
  background: var(--pink);
  color: black;
}

td,
th {
  vertical-align: center;
  padding-inline: 1em;
  padding-block: 0.5em;
  font-weight: bold;
}

td:first-of-type,
th:first-of-type {
  border-radius: 100vw 0 0 100vw;
}

td:last-of-type,
th:last-of-type {
  border-radius: 0 100vw 100vw 0;
}

@media (max-width: 600px) {
  .list-grid > * {
    grid-column: 1 / -1;
  }
  .text-full,
  .text-block,
  .text {
    grid-column: 1 / -1;
  }
  .image-grid {
    grid-column: 1 / -1;
    grid-row: unset;
    grid-template-columns: repeat(2, 1fr);
  }
  .image-grid img:first-of-type {
    grid-column: 1 / -1;
    height: unset;
  }
}
</style>
