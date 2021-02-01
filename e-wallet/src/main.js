import Vue from "vue";
import App from "./App.vue";
import router from "./router";


Vue.config.productionTip = false;

new Vue({
    router,
        data() {
          return {
            
            cardData: [
              {
                id: "1",
                holder: "JAYASHREE BATHALA",
                number: "1234 5678 8765 4567",
                vendor: "vendor-bitcoin",
                validMonth: "05",
                bgColor :"#800000",
                validYear: "2021",
              },
              {
                id: "2",
                holder: "JAYASHREE BATHALA",
                number: "3456 4567 7869 7689",
                vendor: "vendor-blockchain",
                bgColor :"blue",
                validMonth: "07",
                validYear: "2023",
              },
              {
                id: "3",
                holder: "JAYASHREE BATHALA",
                number: "6543 4567 8943 7689",
                vendor: "vendor-evil",
                bgColor :"yellow",
                validMonth: "07",
                validYear: "2023",
              },
              {
                id: "4",
                holder: "JAYASHREE BATHALA",
                number: "3456 4567 8943 7689",
                vendor: "vendor-ninja",
                bgColor :"grey",
                validMonth: "12",
                validYear: "2023",
              },
            ]
        };
    },
    methods:{
      setActiveCard(id) {
        this.cardData = this.cardData.filter((cards) => cards.id === id);
      }

    },
    

    render: h => h(App)
}).$mount("#app");