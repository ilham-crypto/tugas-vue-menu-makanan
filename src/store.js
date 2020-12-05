
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listMenu: [
            {hari: 'senin', menu: 'Telor Balado+Kering+mie+Oseng"Sawi'},
            {hari: 'selasa', menu: 'Ayam bacem+Ayam Balado+Oseng"Kangkung'},
            {hari: 'rabu', menu: 'Sambel terong+pepes+Botok Udang+Ayam crispy'}
        ]
    },
    mutations: {
        KONFIRMASI_MENU: (state, menu) => {
            state.listMenu.push(menu)
        }
    },
    actions: {
        simpanMenu({ commit, state }, menu) {
            setTimeout(() => {
                commit('KONFIRMASI_MENU', menu)
                state.isLoading = false
            }, 1500)
        }
    }
})
