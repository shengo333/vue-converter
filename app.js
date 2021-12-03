var app = new Vue({ 
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      amount: '100',
      currencies: [],
      selectedRate: null,
    },
    methods: {
        getCurrencyRates(){
            fetch('https://api.exchangerate.host/latest').then(response => response.json())
            .then(json => {
                this.currencies= json.rates
            })
        },
    },
    computed: {
        result(){
            return this.selectedRate * this.amount
        }
    },
    created(){
        this.getCurrencyRates()
    }
});
