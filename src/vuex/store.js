import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import {
  SHOW_SKILL,
  APPEND_SKILL_TO_ROOT,
  APPEND_SKILL_TO_JOB,
  APPEND_ACTION_TO_SKILL,
  TOGGLE_SELECT_CARD
} from './mutation-types'

const state = {
  edit: {
    skill: '5km'
  },
  select: false,
  user: {
    name: '山田太郎',
    jobs: [
      {
        name: '運動',
        skills: [
          {
            name: 'ランニング',
            actions: ['道具を揃える', '5km']
          }
        ]
      },
      {
        name: 'IT',
        skills: [
          {
            name: '開発',
            actions: ['Eclipse', 'SDK', 'Hello World']
          }
        ]
      }
    ]
  }
}

const actions = {
  [TOGGLE_SELECT_CARD] ({ commit }, keyword) {
    commit(TOGGLE_SELECT_CARD, keyword)
  },

  [SHOW_SKILL] ({ commit }, keyword) {
    commit(SHOW_SKILL, keyword)
  },

  [APPEND_SKILL_TO_ROOT] ({ commit }, keyword) {
    commit(APPEND_SKILL_TO_ROOT, keyword)
  },

  [APPEND_ACTION_TO_SKILL] ({ commit }, keyword) {
    commit(APPEND_ACTION_TO_SKILL, keyword)
  },

  [APPEND_SKILL_TO_JOB] ({ commit }, keyword) {
    commit(APPEND_SKILL_TO_JOB, keyword)
  }
}

const getters = {
  skill: state => state.edit.skill,
  name: state => state.user.name,
  jobs: state => state.user.jobs,
  select: state => state.select,
  skills: state => {
    let skills = []
    for (let job of state.user.jobs) {
      for (let skill of job.skills) {
        skills.push(skill.name)
      }
    }
    return skills
  },
  actions: state => {
    let actions = []
    for (let job of state.user.jobs) {
      for (let skill of job.skills) {
        actions = actions.concat(skill.actions)
      }
    }
    return actions
  }
}

const mutations = {
  [TOGGLE_SELECT_CARD] (state, keyword) {
    state.select = !state.select
  },

  [SHOW_SKILL] (state, keyword) {
    state.edit.skill = keyword
  },

  [APPEND_SKILL_TO_ROOT] (state, keyword) {
    state.user.jobs.push({
      name: keyword,
      skills: []
    })
    state.edit.skill = keyword
  },

  [APPEND_ACTION_TO_SKILL] (state, keyword) {
    for (let job of state.user.jobs) {
      for (let skill of job.skills) {
        if (skill.name === keyword) {
          skill.actions.push(state.edit.skill)
        }
      }
    }
    state.select = !state.select
  },

  [APPEND_SKILL_TO_JOB] (state, keyword) {
    for (let job of state.user.jobs) {
      if (job.name === keyword) {
        job.skills.push({name: state.edit.skill, actions: []})
      }
    }
    state.select = !state.select
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
