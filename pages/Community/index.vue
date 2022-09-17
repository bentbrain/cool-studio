<script setup>
import flower from "@/assets/2.png";
import tvs from "@/assets/images/tvs.jpg";
const route = useRoute();
const text = await queryContent("community-page/community-page-content").findOne();

const now = new Date()

const upcoming = await queryContent('community').where({time: { $gte: now }, enabled: true}).find()
const past = await queryContent('community').where({time: { $lt: now }, enabled: true}).find()


</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>{{ route.name }} | Cool Studio</Title>
        <Link rel="icon" :href="flower" as="script" />
      </Head>
    </Html>
    <Section
      ><div class="text">
        <h1 class="pageTitle">Community</h1>
        <ContentRenderer :value="text" />

        <div class="events">
          <div v-if="upcoming.length > 0" class="upcoming">
            <h2>Upcoming</h2>
            <div v-for="event in upcoming" :key="event._path" class="event">
            <div class="top">
              <NuxtLink :to="event._path" >{{event.title}} </NuxtLink> <p class="date" >{{new Date(event.time).toLocaleDateString()}}</p>
            </div>
            <p>{{event.description.substring(0, 200)}}...</p>
            </div>
          </div>
          <div v-if="past.length > 0" class="past">
            <h2>Past</h2>
            <div v-for="event in past" :key="event._path" class="event">
            <div class="top">
              <NuxtLink :to="event._path" >{{event.title}} </NuxtLink> <p class="date"  >{{new Date(event.time).toLocaleDateString()}}</p>
            </div>
            <p>{{event.description.substring(0, 200)}}...</p>
            </div>
          </div>
        </div>
      </div>
      <img class="tvs" :src="tvs" alt="TVs Stacked" />
    </Section>
  </div>
</template>

<style lang="scss" scoped>

  .date {
    padding: 0.2rem 0.5rem;
    background: var(--green);
    font-size: 0.8rem;
    border-radius: 100vw;
    margin-right: 1rem;
    font-weight: 400;
    line-height: 1;
    height: min-content;
  }

  .past {

    h2 {
      background: linear-gradient(224deg, var(--green), var(--yellow));
      -webkit-background-clip: text;
    }
    .date {
      background: var(--yellow);
    }

    .event {
      opacity: 0.5;
    }
  }

  .upcoming {
    margin-bottom: 2rem;
  }

  .event {
    margin-bottom: 1rem;
  }

  .events {
    a {
      font-size: 1.2rem;
      font-weight: bold;
      color: black;
      text-decoration: underline;
    }
.top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
  }
.text {
  grid-column: span 6;
}

.text p {
  max-width: min(65ch, 100%);
}

.tvs {
  grid-column: span 6;
}

@media (max-width: 600px) {
  .text,
  .tvs {
    grid-column: 1 / -1;
  }
}
</style>
