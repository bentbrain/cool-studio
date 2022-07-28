<script setup>
import flower from "@/assets/2.png";

const props = defineProps({
  title: String,
  link: String,
  colour: String,
});
</script>

<template>
  <NuxtLink :to="link" class="bigButton">
    <h3 :class="colour"><slot /></h3>
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 275.77 280.74"
    >
      <g id="fmcn2d.tif">
        <path
          class="cls-1"
          :class="colour"
          d="M78.62,89.72c-3.13-4.59-6.47-8.98-9.19-13.75-8.12-14.26-14.53-29.13-15.17-45.84-.28-7.34,1.16-14.38,5.63-20.39C66.3,1.09,75.28-1.14,85.41,.5c12.37,2,23.22,7.51,33.04,15.14,13.81,10.72,23.59,24.37,29.46,40.83,.08,.24,.26,.44,.57,.93,2.41-4.3,4.42-8.61,7.17-12.48,8.67-12.22,18.68-23.22,30.13-32.87,4.75-4,10.2-6.89,16.3-8.34,9.71-2.31,18.89,1.37,24.39,9.84,5.9,9.09,6.03,18.87,3.22,28.93-2.89,10.36-7.97,19.78-12.96,29.21-5.3,10.02-11.45,19.53-18.41,29.08,3.82-.22,7.29-.47,10.77-.61,15.03-.62,30.01-.13,44.84,2.66,5.85,1.1,11.51,2.96,15.82,7.3,6.84,6.9,7.22,15.28,4.25,23.85-4.15,11.97-12.31,20.81-23.12,27.19-16.19,9.57-33.9,10.74-52.08,9.09-.34-.03-.69-.04-1.65-.1,4.65,3.68,8.9,6.94,13.04,10.34,11.73,9.66,22.07,20.58,29.4,34.01,2.63,4.83,4.84,9.93,6.12,15.35,2.21,9.37-.06,15.23-9.33,21.13-20.66,13.14-46.52,9.78-64.83-3.75-11.15-8.24-19.66-18.71-26.19-30.86-.52-.96-1.18-1.85-1.97-3.07-1.07,3.51-2,6.82-3.1,10.08-6.62,19.61-16.8,36.88-33.84,49.24-9.08,6.58-19.23,10.11-30.65,7.02-6.19-1.68-10.64-5.76-13.94-11.06-7.84-12.57-8.26-26.26-5.46-40.25,3.12-15.61,10.83-29.04,20.36-41.55,5.59-7.34,11.87-14.05,18.35-20.61,.25-.25,.45-.54,1-1.19-5.06-.52-9.77-.99-14.47-1.48-13.64-1.43-27.36-2.14-40.9-4.39-10.07-1.67-19.72-4.53-27.97-11.01-13.52-10.61-16.83-29.97-7.41-44.41,4.87-7.47,11.95-11.9,20.3-14.74,13.16-4.48,26.51-4.71,40.04-2.42,4.34,.74,8.56,2,12.91,3.23Z"
        />
      </g>
    </svg>
  </NuxtLink>
</template>

<style scoped>
.bigButton {
  display: grid;
  place-items: center;
  text-align: center;
  isolation: isolate;
  color: white;
  text-decoration: none;
  line-height: 1;
  max-width: min(15rem, 100%);
}

h3 {
  font-size: 2.5rem;
}

.bigButton:hover svg {
  transform: rotate(50deg);
}

svg {
  z-index: -1;
  transition: all 0.3s ease;
  max-width: min(15rem, 30vw);
}

path.pink {
  fill: var(--pink);
}
h3.pink {
  background: none;
  text-shadow: 5px 5px var(--pink);
}
path.orange {
  fill: var(--orange);
}
h3.orange {
  background: none;
  text-shadow: 5px 5px var(--orange);
}
path.green {
  fill: var(--green);
}
h3.green {
  background: none;
  text-shadow: 5px 5px var(--green);
}
path.yellow {
  fill: var(--yellow);
}

h3.yellow {
  background: none;
  text-shadow: 5px 5px var(--yellow);
}
.bigButton > * {
  grid-row: 1;
  grid-column: 1;
  place-self: center;
}

svg {
}
</style>
