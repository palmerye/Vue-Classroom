<template>
	<div>
    <p>{{name}}</p>
		<p>这是刚刚改过的数据：{{_vuexData}}</p>
    <router-link to="/test">Go back</router-link>
	</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      name: 'other'
    }
  },
  components: {

  },
  computed: {
    ...mapState({
      _vuexData: state => state.test.testData
    })
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped>

</style>
