<template>
<div>
	<div class="container">
		<div>
			<input type="text" placeholder="Search" v-model="textSearch"  @keyup.enter="getPokemon()">
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
			textSearch: '',
			pokemones: '',
			errorSearch: false,
		}
	},
	methods: {
    ...mapMutations(['setPokemon','setSearch', 'setError', 'setValidationRequest']),
		 async getPokemon () {
			this.setSearch(true)
			if (this.textSearch.length > 0) {
				try {
					const response = await this.$axios.get(`${this.textSearch.toLowerCase()}`)
					console.log(response.data.id)
					this.setPokemon(response.data)
					this.setValidationRequest(true)
				} catch (err) {
					this.setError(true)
					this.setPokemon([])
					this.setValidationRequest(false)
				}
			}	else {
				this.setError(true)
			}		
		},
	},
  computed: {
    ...mapGetters(['error', 'search'])
  },
}
</script>