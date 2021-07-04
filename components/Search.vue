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
		...mapMutations(['setSearch', 'setError', 'setPokemons']),
		 getPokemon () {
		this.setSearch(true)
      this.$axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonSearch.toLowerCase()}`)
        .then(response => ( this.$store.commit("setPokemons", response.data)))
				.catch (err => console.log(err))
				
      // const request = await this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonSearch.toLowerCase()}`)
      // if (request.status == 200) {
			// 	this.setPokemons(request.data.results)
			// 	this.setError(false)
			// } else {
			// 	this.setError(true)
			// }
		},
	},
  computed: {
    ...mapGetters(['pokemons', 'pokemonOne', 'error'])
  },
}
</script>