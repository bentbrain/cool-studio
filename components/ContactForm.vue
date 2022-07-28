<script setup>
import flower from "@/assets/2.png";
</script>

<template>
  <div></div>
</template>

<style scoped>
input,
label,
textarea {
  display: block;
}

button {
  align-self: flex-end;
  margin-left: auto;
}

label {
  font-weight: bold;
  color: white;
  background: var(--pink);
  border: 1px solid var(--pink);
  padding-inline: 0.8rem;
  padding-block: 1px;
  border-radius: 100vw;
  text-transform: uppercase;
  text-align: center;
  width: max-content;
  margin-bottom: 0.5rem;
  font-size: 0.9em;
}

input {
  border-radius: 100vw;
  padding-inline: 0.8rem;
  border: 1px solid var(--pink);

  min-width: 30ch;
}

input:focus-within,
textarea:focus-within {
  outline: none;
  border: 1px solid var(--yellow);
}

textarea {
  border-radius: 0 0 0.5rem 0.5rem;
  border: 1px solid var(--pink);
  padding-left: 1rem;
  width: 100%;
  min-height: 7rem;
}

form {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: min(65ch, 100%);
  margin: 0 auto;
}

form > div {
  margin-bottom: 2rem;
}

.flex {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.required {
  position: relative;
}

.required::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1rem;
  aspect-ratio: 1;
  transform: translate(50%, -50%);
  background-image: url("@/assets/2.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
