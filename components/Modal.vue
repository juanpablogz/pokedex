<template>
<div id="app" class="modal-vue">
  
  <button @click="showModal = true">Testing modal</button>
  
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  
  <div class="modal" v-if="showModal">
    <div class="close" @click="showModal = false">
			<img src="./../assets/img/close.png" alt="">
		</div>
    <img src="./../assets/img/back.png" alt="" class="back">
		<div class="container-pokemon">
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" alt="" class="pokemon">
		</div>
		<!-- {{pokemones}} -->

  </div>
  
</div>
</template>

<script>
export default {
	data () {
		return {
			showModal: false,
			pokemones: [],
			characters: {
				name: '',
				height: '',
				width: '',
				types: []
			}
		}
	},
  mounted () {
		this.getPokemon()
	},
	methods: {
		getPokemon () {
    this.$axios
      .get(`https://pokeapi.co/api/v2/pokemon/7`)
			.then(response => (this.pokemones = response))
		},
		change (val) {
      this.$store.commit("products/updatePorn", val);
		}
	},
}
</script>