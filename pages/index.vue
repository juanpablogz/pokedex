<template>
<div>
	<div v-if="enter" >
		<Search/>
		<Pokemons/>
		<Navigator/>
	</div>	
	<Welcome v-else/>
</div>
</template>

<script>
import utils from '@/mixins/utils'
export default {
  mixins: [utils],
	data () {
		return {
		}
	},
	methods: {
	},
}
</script>
<style>
@import './../assets/style.css';
</style>
