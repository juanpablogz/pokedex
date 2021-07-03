<template>
<div id="app" class="modal-vue">

  <div class="overlay" v-if="modal" @click="changeModal(false)"></div>
	<!-- {{modal}} -->
  <div class="modal" v-if="modal">
    <div class="close" @click="changeModal(false)">
			<img src="./../assets/img/close.png" alt="">
		</div>
    <img src="./../assets/img/back.png" alt="" class="back">
		<div class="container-pokemon">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" alt="" class="pokemon">
		</div>
		<!-- {{pokemones}} -->
		<div class="characters">
			<p class="border"><strong>Name: </strong>{{pokemon.name}}</p>
						<!-- {{pokemon.id}} -->
			<p class="border"><strong>Weight: </strong>{{pokemon.weight}}</p>
			<p class="border"><strong>height: </strong>{{pokemon.height}}</p>
			<div style="display: flex">
				<div v-for="type in pokemon.types" v-bind:key="type.id">
				 Types: {{type.type.name }}  {{','}}
				</div>
			</div>
		</div>
		<div class="container-share">
      <button class="button share" @click="copy()">Share to my friends</button>
			<img class="star star-share" src="./../assets/img/star.png" alt="">
		</div>
  </div>
  
</div>
</template>

<script>
import utils from '@/mixins/utils'
export default {
	  mixins: [utils],  
	data () {
		return {
			showModal: true
		}
	},
	methods: {
		async copy() {
			let copy = `${this.pokemon.name}, ${this.pokemon.weight}, ${this.pokemon.height}`
				try {
						await this.$copyText(copy);
				} catch (e) {
						console.error(e);
				}
		},
	},
  computed: {
    pokemon() {
	  return this.$store.state.pokemon.findPokemon;
		},
  },
}
</script>
<style>
.characters {
	margin-top: 220px;
	padding-left: 30px;
	margin-bottom: 10px;
}
.border {
	border-bottom: 1px solid #E8E8E8;
	padding-bottom: 20px;
}
.container-share {
	display: flex;
	justify-content: space-between;
}
.share {
	margin-bottom:0px;
	margin-left: 20px;
}
.star-share {
	margin-right: 20px;
	margin-top: 20px
}
</style>
