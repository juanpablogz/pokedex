<template>
<div>
  <Modal v-show="modal" style=""/>
<div class="container-table">
  <div class="list-group-wrapper">
    <transition name="fade">
      <div id="loading" class="loading" v-show="loading">
        <img class="image-loading" src="./../assets/img/loader.png" alt="" >
      </div>
    </transition>
  <div  class="align-table" id="infinite-list" v-if="navigation != true" >
    <div v-for="(pokemon, index) in pokemons" v-bind:key="pokemon.id" class="list-group-item">
      <div class="align-pokemones" v-show="pokemon.name != null">
        <p class="min" @click="getInfo(index)">{{pokemon.name}}</p>
        <div :class="[favorites.indexOf(index+1) == -1 ? 'star': 'star1']" @click="add(index)"></div>
      </div>
    </div>
  </div>
  <div  class="align-table" id="infinite-list" v-if="navigation" >
    <div v-for="(pokemon, index) in pokemons" v-bind:key="pokemon.id" class="list-group-item">
      <div class="align-pokemones" :class="[favorites.indexOf(index+1) == -1 ? 'filter': '']" >
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
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['pokemons', 'pokemonOne', 'navigation', 'modal'])
  },
	data () {
		return {
    loading: false,
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
    ...mapMutations(['setPokemons', 'setPokemon', 'setModal', 'setListFavorites']),
    add (index) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      this.favorites.push(index + 1)
      this.setListFavorites(index)
    },
    loadMore () {
      this.loading = true;
      setTimeout(e => {
        this.limit = this.limit + 100
        this.loading = false;
        this.getPokemon()
      }, 300);
    },
		async getPokemon () {
      const request = await this.$axios.get(`?limit=${this.limit}`)
      if (request.status == 200) this.setPokemons(request.data.results)      
    },
		async getInfo(index) {
      this.setModal(true)
      console.log(index)
      const request = await this.$axios.get(`${index+1}`)
      if (request.status == 200) this.setPokemon(request.data)
		}
	}
}
</script>

<style>
.filter {
  display: none;
}
</style>