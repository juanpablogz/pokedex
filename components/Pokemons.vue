<template>
<div>
	<Table :items="pokemons" v-if="navigation"/>
	<Table :items="pokemons" :favoritePokemon="true" v-if="navigation != true"/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	computed: {
		...mapGetters(['pokemons', 'navigation', 'modal'])
	},
}
</script>

<style>
.filter {
	display: none;
}
</style>