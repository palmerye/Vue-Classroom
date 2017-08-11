<template>
	<div>
    <p>{{name}}</p>
		<p>vuex: {{_vuexData}}</p>
    <input type="test" v-model="inputValue">
    <button @click="toChange(inputValue)">button</button>
    <router-link to="/other">Go to Other</router-link>
    <my-comp></my-comp>
    <com-test></com-test>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import myComp from '@/components/myComp'
import comTest from '@/components/comTest'

export default {
  data () {
    return {
      name: 'test',
      inputValue: 'inputValue'
    }
  },
  components: {
    myComp,
    comTest
  },
  computed: {
    ...mapState({
      _vuexData: state => state.test.testData
    })
  },
  mounted () {

  },
  methods: {
    toChange (data) {
      console.log(data)
      this.$store.dispatch('setTest', data)
    }
  }
}
</script>
<style scoped>

</style>
