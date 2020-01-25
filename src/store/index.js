import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../plugins/axios"

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    campaigns: []
  },
  actions: {
    loadCampaigns ({ commit }) {
      Vue.axios
        .get('http://api.agis.stefan-schlosser.de/campaigns/c22e8408-1619-4c2f-aa28-ff8d6b3e235a')
        .then(r => r.data)
        .then(campaigns => {
        commit('SET_CAMPAIGNS', campaigns)
        })
    }
  },
  mutations: {
    SET_CAMPAIGNS(state, campaigns) {
      state.campaigns = campaigns
    }
  },
  modules: {
  }
})
