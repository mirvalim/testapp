import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        products: [
            {
                productName:"pitsa",
                photoUrl:'https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg',
                price: 45000,
                description:"mazzali ovqatlar"
            },
            {
                productName:"pitsa",
                photoUrl:'https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg',
                price: 45000,
                description:"mazzali ovqatlar"
            },
            {
                productName:"pitsa",
                photoUrl:'https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg',
                price: 45000,
                description:"mazzali ovqatlar"
            },

        ]
    },
    mutations: {
        addProducts(state, data) {
            data.id = state.products.length + 1
            state.products.push(data)
        },
        editProducts(state, data) {
            let index = state.products.findIndex(item => item.id === data.id)
            Vue.set(state.products, index, data)
        },
        deleteProducts(state, id) {
            let index = state.products.findIndex(item => item.id === id)
            state.products.splice(index, 1)
        },
    },
})
