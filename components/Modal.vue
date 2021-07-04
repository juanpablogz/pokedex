
<template>
<div id="app" class="modal-vue">

  <div class="overlay" v-if="modal" @click="setModal(false)"></div>
  <div class="modal" v-if="modal">
    <div class="close" @click="setModal(false)">
			<img src="./../assets/img/close.png" alt="">
		</div>
    <img src="./../assets/img/back.png" alt="" class="back">
		<div class="container-pokemon">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonOne.id}.png`" alt="" class="pokemon">
		</div>

		<div class="characters">
			<p class="border"><strong>Name: </strong>{{pokemonOne.name}}</p>
			<p class="border"><strong>Weight: </strong>{{pokemonOne.weight}}</p>
			<p class="border"><strong>height: </strong>{{pokemonOne.height}}</p>
			<div style="display: flex">
				<div v-for="type in pokemonOne.types" v-bind:key="type.id">
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
import { mapGetters, mapMutations } from 'vuex';
export default {
	data () {
		return {
			showModal: true
		}
	},
	methods: {
    ...mapMutations(['setModal']),
		async copy() {
			let copy = `${this.pokemonOne.name}, ${this.pokemonOne.weight}, ${this.pokemonOne.height}`
				try {
						await this.$copyText(copy);
						this.$swal({
							position: 'top-end',
							icon: 'success',
							title: 'Your work has been saved',
							showConfirmButton: false,
							timer: 1500
						})
				} catch (e) {
						console.error(e);
				}
		},
	},
  computed: {
    ...mapGetters(['modal', 'pokemonOne'])
  },
}
</script>