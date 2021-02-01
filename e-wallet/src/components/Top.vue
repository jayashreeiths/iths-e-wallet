<template>
  <header>
    <h1>{{ title }}</h1>
    <p>{{ cardTitle }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    cardTitle: String,
  },
};
</script>

<style scoped>
h1,
p {
  text-transform: uppercase;
  text-align: center;
}
h1 {
  font-family: "Source Sans Pro", sans-serif;
  margin: 1.5rem 0;
}
p {
  font-family: "PT Mono", monospace;
  color: rgba(233, 10, 10, 0.4);
  font-weight: 700;
  padding-bottom: .5rem;
}
</style>