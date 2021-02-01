<template>
    <div class="card"  :style="{ backgroundColor:bgColor}" @click="makeActiveCard" >
    <img v-if="vendor === 'vendor-bitcoin'"
      src="../assets/images/chip-dark.svg"
      alt="credit card chip image"
    />
    <img v-else
      src="../assets/images/chip-light.svg"
      alt="credit card chip image"
    />
    
    <img v-if="vendor === 'vendor-bitcoin' " class="logo" src="../assets/images/vendor-bitcoin.svg" alt="Bitcoin logo" />
    <img v-else-if="vendor === 'vendor-blockchain' " class="logo" src="../assets/images/vendor-blockchain.svg" alt="blockchainlogo" />
    <img v-else-if="vendor === 'vendor-evil' " class="logo" src="../assets/images/vendor-evil.svg" alt="evil logo" />
    <img v-else-if="vendor === 'vendor-ninja' " class="logo" src="../assets/images/vendor-ninja.svg" alt="ninja logo" />
    <p class="card-number">{{ number }}</p>
    <p class="card-name name-small">CARDHOLDER NAME</p>
    <p class="valid-until name-small">VALID UNTIL</p>
    <p class="holder-name">{{ holder }}</p>
    <p class="expiry-date">{{ expiry }}</p>
    </div>
</template>
<script>
export default {
    props: {
    number: String,
    holder: String,
    expiry: String,
    vendor: String,
    id: String,
    bgColor:String,
    validMonth: String,
    validYear: String
    
  },
  methods: {
    makeActiveCard() {
      this.$root.setActiveCard(this.id);
    }
  },
 
};
</script>
<style scoped>
.card {
  width: 100%;
  height: 220px;
  border-radius: 10px;

  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 6fr 3fr 1fr 1fr;
  margin-bottom: 1rem;
  }
p {
  font-family: "PT Mono", monospace;
  font-size: 1.1rem;
}
.logo{
    justify-self: end;
}
.bg-bitcoin {
  background-color: #ffb43f;
}
.bg-blockchain{
    background-color: #280fb4;
}

.card-name{
    grid-row: 3;
}
.card-number {
  grid-row: 2;
  grid-column: 1/3;
  font-size: 1.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.0rem;
}
.holder-name {
  grid-row: 4;
  align-self: end;
  text-transform: uppercase;
}
.valid-until {
  grid-row: 3;
  grid-column: 2;
  justify-self: end;
}
.expiry-date {
  grid-row: 4;
  grid-column: 2;
  justify-self: end;
  align-self: end;
}
.name-small {
  font-size: 0.7rem;
}
</style>
