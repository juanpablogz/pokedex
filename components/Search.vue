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
		<Error v-show="error || home" :home="home"/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
	data () {
		return {
		}
	},
	methods: {
    ...mapMutations(['setPokemon','setSearch', 'setError', 'setLoading', 'setHome']),
		 async getPokemon () {
			this.setSearch(true)
			if (this.textSearch.length > 0) {
				this.setLoading(true)
				try {
					const response = await this.$axios.get(`${this.textSearch.toLowerCase()}`)
					this.setPokemon(response.data)
					this.setLoading(false)
					this.setHome(true)
				} catch (err) {
					this.setError(true)
					this.setLoading(false)
					this.setPokemon([])
				}
			}	else {
				this.setError(true)
				
			}		
		},
	},
  computed: {
		...mapGetters(['error', 'search', 'home']),
		textSearch: {
			get () {
				return this.$store.state.textSearch
			},
			set (value) {
				this.$store.commit('setTextSearch', value)
			}
  }
  },
}
</script>