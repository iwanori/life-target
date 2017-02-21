<template lang="pug">
  li.list-group-item(@click.stop="SHOW_SKILL(name)") {{ name }}
    slot
</template>

<script>
import { mapActions } from 'vuex'
import { SHOW_SKILL } from '../vuex/mutation-types'

export default {
  name: 'skill',
  props: ['name'],
  methods: mapActions([SHOW_SKILL])
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li
  padding 2px 4px
    
</style>
