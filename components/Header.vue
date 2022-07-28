<script setup>
import logo from "@/assets/logo.png";

const menuOpen = useState("test", () => false);
</script>

<template>
  <header>
    <nav :class="menuOpen ? 'showoverflow' : 'hideoverflow'">
      <NuxtLink to="/"><img :src="logo" alt="" /></NuxtLink>
      <button class="burger" @click="menuOpen = !menuOpen">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120.54 108.11"
          style="height: 2rem"
        >
          <defs></defs>
          <rect
            class="cls-1"
            x="0"
            y="0"
            width="120.54"
            height="31.35"
            rx="15.68"
            ry="15.68"
          />
          <rect
            class="cls-2"
            x="0"
            y="38.38"
            width="120.54"
            height="31.35"
            rx="15.68"
            ry="15.68"
          />
          <rect
            class="cls-3"
            x="0"
            y="76.76"
            width="120.54"
            height="31.35"
            rx="15.68"
            ry="15.68"
          />
        </svg>
      </button>
      <ol :class="menuOpen ? 'active' : 'hide'">
        <button class="closeMenu" @click="menuOpen = !menuOpen">X</button>
        <NuxtLink @click="menuOpen = !menuOpen" to="/">
          <li>Home</li>
        </NuxtLink>
        <NuxtLink @click="menuOpen = !menuOpen" to="/about">
          <li>About</li>
        </NuxtLink>
        <NuxtLink @click="menuOpen = !menuOpen" to="studio">
          <li>The Studio</li>
        </NuxtLink>
        <NuxtLink @click="menuOpen = !menuOpen" to="residents">
          <li>Residents</li>
        </NuxtLink>
        <NuxtLink @click="menuOpen = !menuOpen" to="community">
          <li>Community</li>
        </NuxtLink>
      </ol>
    </nav>
  </header>
</template>

<style scoped>
header {
  isolation: isolate;
  z-index: 100;
}
.router-link-active li {
  background: var(--green);
}

.router-link-active li::before {
  display: none;
}

.router-link-active li:focus::before {
  background: red;
  transform: translate(-50%, -50%) scale(1.5);
}

button {
  display: none;
}

@media (max-width: 600px) {
  /* .hideoverflow {
    overflow: hidden;
  }
  .showoverflow {
    overflow: visible;
  } */

  ol {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--orange);
    padding: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.06, 0.95, 0.56, 0.97);
  }

  ol.active {
    transform: translateX(0%);
  }

  ol li {
    font-weight: 900;
    font-size: 1.5rem;
  }

  button {
    display: unset;
    border: unset;
    background: unset;
    cursor: pointer;
  }

  .cls-1 {
    fill: var(--pink);
  }
  .cls-2 {
    fill: var(--orange);
  }
  .cls-3 {
    fill: var(--yellow);
  }
  .closeMenu {
    position: fixed;
    text-align: left;
    width: 2em;
    top: 1rem;
    right: 1rem;
    border-radius: 100vw;
    font-size: 2rem;
    font-weight: 900;
    border: none;
    background: var(--pink);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
  }
}
</style>
