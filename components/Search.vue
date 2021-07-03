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
		<!-- <div class="error">
			<button class="button">Go back home</button>
		</div> -->
		<Error v-show="error"/>
</div>
</template>

<script>
import utils from '@/mixins/utils'
export default {
  mixins: [utils],
	data () {
		return {
			pokemonSearch: '',
			pokemones: '',
			errorSearch: false
		}
	},
	methods: {
		getPokemon () {
		this.changeState(true)
      this.$axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonSearch}`)
        .then(response => (this.$store.commit("pokemon/updateError", false), this.$store.commit("pokemon/updateFind", response.data)))
        .catch (err => console.log(err), this.$store.commit("pokemon/updateError", true))
		},
    back () {
      this.$store.commit("pokemon/updateError", false)
    }
	},
}
</script>