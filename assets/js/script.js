const {createApp} = Vue;

createApp ( {
    // in data si inseriscono gli oggetti
    data () {
        return{
            saluto  : 'Hello Vue!',
            image   : `<img src="assets/img/image.jpg" alt="image">`
            
        }
    },
    // in methods si inseriscono le funzioni
    methods: {

    }
    // con mount ci si collega al tag nell'HTML
}).mount('#app');