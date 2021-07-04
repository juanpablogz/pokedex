<template>
<div class="container-table">
  <div class="list-group-wrapper">
    <transition name="fade">
      <div id="loading" class="loading" v-show="loading">
        <img class="image-loading" src="./../assets/img/loader.png" alt="" >
      </div>
    </transition>
    <div class="align-table" id="infinite-list">
      <!-- {{favorites}} -->
      <div v-for="(pokemon, index) in items" :key="pokemon.id" class="list-group-item">
        <div class="align-pokemones" v-show="pokemon.name != null" :class="[favorites.indexOf(index+1) == -1 && navigation == 'favorites' && !search ? 'filter': '']" >
          <p class="min" @click="getInfo(index)">{{pokemon.name}}</p>
          <div v-if="search" :class="[favorites.indexOf(items.id) == -1 ? 'star': 'star1']" @click="add(index)" @dblclick="remove(index)"></div>
          <div v-else :class="[favorites.indexOf(index+1) == -1 ? 'star': 'star1']" @click="add(index+1)" @dblclick="remove(index+1)"></div>
        </div>
      </div>
    </div>
  </div>
    <Modal v-show="modal" style="position: absolute;" :favorites="favorites"/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    items: {
    }
  },
  computed: {
    ...mapGetters(['pokemons', 'pokemonsFound', 'navigation', 'modal', 'search', 'error', 'loading'])
  },
	data () {
		return {
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
          this.getPokemon();
        }
      });
    }
    this.getPokemon();
  },
  methods: {
    ...mapMutations(['setPokemons', 'setPokemon', 'setModal', 'setListFavorites', 'setLoading']),
    add (index) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      if (this.search) index = this.items.id
        this.favorites.push(index)
        this.setListFavorites(index)
    },
    remove (index) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      let position = this.favorites.indexOf(index)
      let copy = this.favorites
      copy.splice(position, 1)
      localStorage.setItem('favorites',JSON.stringify(this.favorites))
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
    },
		async getPokemon () {
      this.limit = this.limit + 100        
      this.setLoading(true)
      const request = await this.$axios.get(`?limit=${this.limit}`)
      if (request.status == 200) this.setPokemons(request.data.results)
      this.setLoading(false)
    },
		async getInfo(index) {
      this.setModal(true)
      console.log(index)
      let value = index+1
      if (this.search) value = this.items.id
      const request = await this.$axios.get(`${value}`)
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