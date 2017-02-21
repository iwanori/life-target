<template lang="pug">
.container
  .row
    .col-4
      .card
        h4.card-header.bg-inverse.text-white {{ name }}
        img.card-img-top(src="http://placehold.jp/150x150.png")
        .list-group.list-group-flush
          li.list-group-item 登録スキル数 10
          li.list-group-item 達成済スキル数 3

      .card
        h4.card-header.bg-inverse.text-white スキル選択
        #skilltree
          .list-group
            ul
              Skill(name="運動")
                ul
                  Skill(name="野球")
                  Skill(name="ランニング")
                    ul
                      Skill(name="5km")
                      Skill(name="10km")
                      Skill(name="フルマラソン")
                      Skill(name="道具を揃える")
              Skill(name="IT")
                ul
                  Skill(name="インターネット")
                    ul
                      Skill(name="Twitterを始める")
                      Skill(name="Facebookを始める")
                  Skill(name="開発")
                    ul
                      Skill(name="Java")
                      Skill(name="VB")
                      Skill(name="開発環境")
                        ul
                          Skill(name="Eclipse")
                          Skill(name="メモ帳")
                          Skill(name="SDK")
    .col-8
      .card
        h4.card-header.bg-inverse.text-white スキル説明
        .card-block
          .row
            .col
              h5.card-title {{ skill }}
              p.card-text {{ skill }}の説明
            .col
              button.btn.btn-danger.btn-sm(@click="APPEND_SKILL_TO_ROOT(skill)") スキルルートに追加
              button.btn.btn-primary.btn-sm(@click="TOGGLE_SELECT_CARD") ぶら下げる

      .card#select(v-if="select")
        h4.card-header.bg-primary.text-white ぶら下げ先
        .list-group.list-group-flush
          li.list-group-item.list-group-item-action(
            type="button",
            v-for="job in jobs",
            @click="APPEND_SKILL_TO_JOB(job.name)"
          ) → {{ job.name }}

      .card#select(v-if="select")
        h4.card-header.bg-primary.text-white ぶら下げ先
        .list-group.list-group-flush
          li.list-group-item.list-group-item-action(
            type="button",
            v-for="skill in skills",
            @click="APPEND_ACTION_TO_SKILL(skill)"
          ) → ＜{{ skill }}＞


      .card
        h4.card-header.bg-inverse.text-white 私のスキル
        .card-block(v-for="job in jobs")
          h5 {{ job.name }}
          hr
          div(v-for="skill in job.skills")
            h6 ＜{{ skill.name }}＞
            span(v-for="(action, index) in skill.actions") {{ index !==0 ? ' → ' : '' }} {{ action }}
            hr

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { APPEND_SKILL_TO_ROOT, TOGGLE_SELECT_CARD, APPEND_SKILL_TO_JOB, APPEND_ACTION_TO_SKILL } from '../vuex/mutation-types'
import Skill from './Skill'

export default {
  name: 'hello',
  computed: mapGetters(['skill', 'name', 'jobs', 'skills', 'select']),
  methods: mapActions([APPEND_SKILL_TO_ROOT, TOGGLE_SELECT_CARD, APPEND_SKILL_TO_JOB, APPEND_ACTION_TO_SKILL]),
  components: { Skill }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.card
  margin-bottom 12px
  h4
    text-align center
    font-size 18px
    padding 4px 8px
  h5
    font-size 18px
    px
    padding 2px 8px
  li, p, span
    font-size 12px
    padding 2px 8px
  button
    margin-bottom 8px
    
#skilltree
  ul,li
    padding 2px 4px
    border sold 0px black

#select
  li
    font-size 18px
    padding 2px 12px
    
</style>
