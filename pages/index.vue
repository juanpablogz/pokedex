<template>
<div>
	<div v-if="goToApp" >
		<Search/>
		<Pokemons/>
		<Navigator/>
	</div>	
	<Welcome v-else/>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
    ...mapGetters(['goToApp'])
	},
}
</script>
<style>
@import './../assets/style.css';
</style>
