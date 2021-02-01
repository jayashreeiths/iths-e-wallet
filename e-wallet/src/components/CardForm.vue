<template>
<div class = cardview>
    
<main>
    <section>
<card-view :id ="id" :number="number" :holder="holder" :validMonth="validMonth" :validYear ="validYear" :vendor="vendor" :bgColor ="bgColor"></card-view>
    </section>
    <section class ="add-form">
<form @submit.prevent="addCard" ref="form">
    <label>Card Number</label>
    <input type="text" maxlength="19" v-model="number" /><br>
    <label>CARDHOLDER NAME</label>
    <input type="text" required placeholder="Name" v-model="holder" />

    <div class="vaild-Month-Year">
      <div class="valid">
        <label>Month</label>
        <select v-model="validMonth">
          <option disabled selected></option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div class="valid">
        <label>Year</label>
        <select v-model="validYear">
          <option disabled selected></option>
          <option value="21">21</option>
          <option value="22">21</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>

    <label>Vendor</label>
    <select name = "vendor" v-model="vendor" @change="changeColor">
      <option disabled selected></option>
      <option value="vendor-bitcoin">Bitcoin</option>
      <option value="vendor-blockchain">Blockchain</option>
      <option value="vendor-evil">Evil</option>
      <option value="vendor-ninja">Ninja</option>
    </select><br>
    <button >Add Card</button>
</form>
</section>

    
    </main>

</div>
  
</template>

<script>

import cardView from "./Card.vue";
export default {
  components: {
   cardView,
},
  data() {
       return {
     id:"23324442424",
     number: "XXXX XXXX XXXX XXXX",
    holder: "Firstname lastname",
    validMonth: "MM",
    validYear: "YY",
    vendor:"",
    bgColor:"",
  
   
       }
  },
  
  methods: {
      changeColor(){
  if (this.$refs.form.vendor.value == "vendor-bitcoin") {
        this.$data.bgColor = "#F9B449";
       
      }
      if (this.$refs.form.vendor.value == "vendor-blockchain") {
        this.$data.bgColor = "#DF2E4C";
        
      }
      if (this.$refs.form.vendor.value == "vendor-evil") {
         this.$data.bgColor = "#8050E5";
        
      }
      if (this.$refs.form.vendor.value == "vendor-ninja") {
         this.$data.bgColor= "#3A3A3A";
        
      }
 
},
    addCard() {
        
        this.$root.$data.cardData.push(
            {
                id: this.id
                , number: this.number
                , holder: this.holder
                , vendor: this.vendor
                ,validMonth:this.validMonth
                ,validYear:this.validYear
                , bgColor: this.bgColor
            }
            
            );
            this.$router.push("/")
            },
        
      
  },
};
</script>

<style scoped>
main {
    max-width: 375px;
    margin: auto;
        
        }
        form {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
}
label {
  font-family: "PT Mono", monospace;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 1rem;
}
input,
select {
  padding: 0.8rem;
  outline-color: darkorange;
}
.vaild-Month-Year {
  display: flex;
  flex-direction: row;
}
.valid {
  display: flex;
  flex-direction: column;
  width: 50%;
}

    
</style>