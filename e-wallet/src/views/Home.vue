<template>
<div>
  <top-view :title="title" :cardTitle="cardTitle"></top-view>
 <card-view :id="cardId" :number="cardNumber" :holder="cardHolder" :expiry="expiryDate" :vendor="vendor" :bgColor ="bgColor" ></card-view>
 <card-stack ></card-stack>
  <router-link to="Addcard" class="add-card-btn">
         <button>add a new card</button>
          
   </router-link>
     
</div>
</template>

<script>

import TopView from "../components/Top.vue";
import CardView from "../components/Card.vue";
import CardStack from "../components/Cardstack";
export default {
  
  components: {
    TopView,
    CardView,
    CardStack
  },
  data() {
    return {
      title: "E-WALLET",
      cardTitle: "Active card",
      modalVisible: false,
    };
},

computed: {
    cardNumber() {
      return this.$root.cardData[0].number
    },
    cardHolder() {
      return this.$root.cardData[0].holder
    },
 expiryDate() {
      return this.$root.cardData[0].validMonth + "/" + this.$root.cardData[0].validYear;
    },
    vendor() {
      return this.$root.cardData[0].vendor;
    },
    cardId() {
      return this.$root.cardData[0].id;
    },
    bgColor() {
      return this.$root.cardData[0].bgColor;
    },
    
  }
};
</script>
<style scoped>
button {
  width: 100%;
  padding: 1rem;
  margin-left:1rem ;
  font-family: "PT Mono", monospace;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0 0 0;
  background-color: rgb(240, 230, 230);
  text-transform: uppercase;
  cursor: pointer;
  outline-color: rgb(110, 81, 240);
}

</style>