<template>
<div>
	<div class="container">
		<div>
			<input type="text" placeholder="Search" v-model="pokemon"  @keyup.enter="getPokemon()">
			<i class="search">
				<img src="./../assets/img/search.png" alt="">
			</i>
		</div>
	</div>
		<Error v-show="error"/>
</div>
</template>

<script>
import utils from '@/mixins/utils'
export default {
  mixins: [utils],
	data () {
		return {
			pokemon: '',
			pokemones: '',
			error: false
		}
	},
	methods: {
		getPokemon () {
		this.changeState(true)
      this.$axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`)
        .then(response => (this.error = false, this.$store.commit("pokemon/updateFind", response.data, console.log(response.data))))
        .catch (err => console.log(err), this.error = true)
		},
	},
}
</script>