<template> 
<section>
    <h1>My Cards</h1>
<section class="card-stack" >
  
  <card-view v-for="card of cards" 
  :key="card.id"
  :id="card.id" 
  :number="card.number" 
  :holder="card.holder" 
  :expiry="card.validMonth + '/' + card.validYear" 
  :vendor="card.vendor"
  :style="{ backgroundColor: card.bgColor }"
 
  >
  </card-view>
  </section>
  </section>
  </template>

<script>
  import cardView from "../components/Card.vue"
export default {
  components: {
    cardView
  },
  computed: {
    cards() {
      return this.$root.$data.cardData
    }
  },
    };
</script>

<style scoped>
.card-stack {
  display: grid;
  grid-auto-rows: 4rem;
  margin-bottom: 12rem;
}
h1 {
  font-family:cursive;
  color: rgba(34, 34, 34, 0.4);
  font-weight: 700;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: .5rem;
}
</style>

