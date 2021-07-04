<template>
<div class="container-table">
  <div class="list-group-wrapper">
    <transition name="fade">
      <div id="loading" class="loading" v-show="loading">
        <img class="image-loading" src="./../assets/img/loader.png" alt="" >
      </div>
    </transition>
	<!-- {{search}} -->
  <div class="align-table" id="infinite-list" v-if="search">
    <div v-for="(pokemon, index) in pokemonOne" v-bind:key="pokemon.id" class="list-group-item">
      <div class="align-pokemones" v-show="pokemon.name != null" :class="[favorites.indexOf(index+1) == -1 && favoritePokemon != true ? 'filter': '']">
        <p class="min" @click="getInfo(pokemonOne.id)">{{pokemon.name}}</p>
				{{pokemonOne.id}}
        <div :class="[favorites.indexOf(index+1) == -1 ? 'star': 'star1']" @click="add(index)"></div>
      </div>
    </div>
  </div>
  <div class="align-table" id="infinite-list" v-else>
    <div v-for="(pokemon, index) in items" v-bind:key="pokemon.id" class="list-group-item">
      <div class="align-pokemones" v-show="pokemon.name != null" :class="[favorites.indexOf(index+1) == -1 && favoritePokemon != true ? 'filter': '']">
        <p class="min" @click="getInfo(index)">{{pokemon.name}}</p>
        <div :class="[favorites.indexOf(index+1) == -1 ? 'star': 'star1']" @click="add(index)"></div>
      </div>
    </div>
  </div>
  </div>
    <Modal v-show="modal" style="position: absolute;" class="modal-position" :favorites="favorites"/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    favoritePokemon: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    ...mapGetters(['pokemons', 'pokemonOne', 'navigation', 'modal', 'search'])
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
    if (listElm != null) {
      listElm.addEventListener('scroll', e => {
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.loadMore();
        }
      });
    }
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
      const request = await this.$axios.get(`${index+1}`)
      console.log(request)
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