<template>
<div>
	<Table :items="pokemonsFound" v-if="search"/>
	<Table :items="pokemons" v-else/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	computed: {
		...mapGetters(['pokemons', 'navigation', 'pokemonsFound', 'search'])
	},
}
</script>

<style>
.filter {
	display: none;
}
</style>