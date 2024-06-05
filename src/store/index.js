import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('orderData');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.orderData);
        localStorage.setItem('orderData', serializedState);
    } catch (err) {
        console.error(err);
    }
};

export default new Vuex.Store({
    state: {
        orderData: loadState() || [],
    },
    mutations: {
        addOrder(state, newItem) {
            const exists = state.orderData.some(item => item.id === newItem.id);
            if (!exists) {
                state.orderData.push(newItem);
                saveState(state);
            }
        },
        deleteOrder(state, id) {
            state.orderData = state.orderData.filter(item => item.id !== id);
            saveState(state);
        },
    },
    actions: {
        submitOrder({ commit }, newItem) {
            commit('addOrder', newItem);
        },
        removeOrder({ commit }, id) {
            commit('deleteOrder', id);
        },
    },
    getters: {
        getOrderData: state => state.orderData,
    },
});