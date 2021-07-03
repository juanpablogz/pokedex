<template>
<div>
	<Welcome v-if="enter == false" />
	<div v-if="enter" >
		<Search/>
		<Pokemones/>
		<Navigator/>
	</div>
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
