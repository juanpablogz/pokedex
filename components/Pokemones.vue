<template>
<div>
<div class="container-table">
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <img src="./../assets/img/loader.png" alt="" style="max-width: 30px">
      </div>
    </transition>

  <Modal v-show="modal"/>
		<div  class="align-table" id="infinite-list" v-if="button != true" >
			<div v-for="(pokemon, index) in findPokemon" v-bind:key="pokemon.id" class="list-group-item">
				<div class="align-pokemones" v-show="pokemon.name != null">
					<p class="min" @click="getInfo(index)">{{pokemon.name}}</p>
          <div v-bind:class="[favorites.indexOf(index+1) == -1 ? 'star': 'star1']" @click="add(index)"></div>
				</div>
			</div>
		</div>
		<div  class="align-table" id="infinite-list" v-if="button" >
			<div v-for="(pokemon, index) in findPokemon" v-bind:key="pokemon.id" class="list-group-item">
				<div class="align-pokemones" v-bind:class="[favorites.indexOf(index+1) == -1 ? 'filter': '']" >
					<p class="min" @click="getInfo(index)">{{pokemon.name}}</p>
          <div v-bind:class="[favorites.indexOf(index+1) == -1 ? 'star': 'star1']" @click="add(index)"></div>
				</div>
			</div>
		</div>
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
    loading: false,
    nextItem: 1,
		items: [],
		pokemones: [],
    limit: 0,
    favorites: [0]
		}
	},
  mounted () {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });
    this.loadMore();
  },
  methods: {
    add (index) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      this.favorites.push(index + 1)
      this.$store.commit("pokemon/updateListFavorites", index)
    },
    loadMore () {
      this.loading = true;
      setTimeout(e => {
        this.limit = this.limit + 100
        console.log(this.limit)
        this.loading = false;
        this.getPokemon()
      }, 200);
  },
		getPokemon () {
    this.$axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}`)
      .then(response => (this.pokemones = response.data.results,
      this.$store.commit("pokemon/updateFind", response.data.results)))
    },
		getInfo(index) {
			console.log(index)
      this.details = index
      this.changeModal(true)
      this.$axios
        .get(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
        .then(response => (this.error = false, this.$store.commit("pokemon/updateFind", response.data)))
        .catch (err => console.log(err), this.error = true)
		}
	},

}
</script>

<style>
.filter {
  display: none;
}
</style>