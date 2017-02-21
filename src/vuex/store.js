import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import {
  SHOW_SKILL
} from './mutation-types'

const state = {
  skill: '5km'
}

const actions = {
  [SHOW_SKILL] ({ commit }, keyword) {
    commit(SHOW_SKILL, keyword)
  }
}

const getters = {
  skill: state => state.skill
}

const mutations = {
  [SHOW_SKILL] (state, keyword) {
    state.skill = keyword
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
