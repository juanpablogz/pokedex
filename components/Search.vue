<template>
<div>
	<div class="container">
		<div>
			<input type="text" placeholder="Search" v-model="pokemonSearch"  @keyup.enter="getPokemon()">
			<i class="search">
				<img src="./../assets/img/search.png" alt="">
			</i>
		</div>
	</div>
		<Error v-show="error"/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	data () {
		return {
			pokemonSearch: '',
			pokemones: '',
			errorSearch: false,
		}
	},
	methods: {
    ...mapMutations(['setPokemons', 'setPokemon', 'setModal', 'setListFavorites', 'setSearch']),
		async getPokemon () {
      const request = await this.$axios.get(`${this.pokemonSearch}`)
			if (request.status == 200) this.setPokemons(request.data)
    },
	},
  computed: {
    ...mapGetters(['pokemons', 'pokemonOne', 'error'])
  },
}
</script>