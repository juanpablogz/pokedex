
<template>
<div id="app" class="modal-vue">

  <div class="overlay" v-if="modal" @click="setModal(false)"></div>
  <div class="modal" v-if="modal">
    <div class="close" @click="setModal(false)">
			<img src="./../assets/img/close.png" alt="">
		</div>
    <img src="./../assets/img/back.png" alt="" class="back">
		<div class="container-pokemon">
			<img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonsFound.id}.png`" alt="" class="pokemon">
		</div>

		<div class="characters">
			<p class="border"><strong>Name: </strong>{{pokemonsFound.name}}</p>
			<p class="border"><strong>Weight: </strong>{{pokemonsFound.weight}}</p>
			<p class="border"><strong>height: </strong>{{pokemonsFound.height}}</p>
			<div style="display: flex">
				Types: 
				<div v-for="type in pokemonsFound.types" v-bind:key="type.id">
				  {{' ' + type.type.name }}  {{','}}
				</div>
			</div>
		</div>
		<div class="container-share">
      <button class="button share" @click="copy()">Share to my friends</button>
			<div v-if="search" class="align-star-modal" :class="[favorites.indexOf(pokemonsFound.id) == -1 ? 'star': 'star1']"></div>
			<div v-else class="align-star-modal" :class="[favorites.indexOf(pokemonsFound.id) == -1 ? 'star': 'star1']"></div>
		</div>
  </div>

</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    favorites: {
      type: Array,
      default: () => []
    },
  },
	data () {
		return {
			showModal: true
		}
	},
	methods: {
    ...mapMutations(['setModal']),
		async copy() {
			let copy = `${this.pokemonsFound.name}, ${this.pokemonsFound.weight}, ${this.pokemonsFound.height}`
				try {
						await this.$copyText(copy);
						this.$swal({
							position: 'top-end',
							icon: 'success',
							title: 'your pokemon has been copied',
							showConfirmButton: false,
							timer: 1500
						})
				} catch (e) {
						console.error(e);
				}
		},
	},
  computed: {
    ...mapGetters(['modal', 'pokemonsFound', 'search'])
  },
}
</script>