<template>
<div>
<div class="container-table">
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <img src="./../assets/img/loader.png" alt="" style="max-width: 30px">
      </div>
    </transition>
		
		<div  class="align-table" id="infinite-list" v-show="search == false">
			<div v-for="(pokemon, index) in pokemones" v-bind:key="pokemon.id" class="list-group-item">
				<div class="align-pokemones" @click="getInfo(index)">
					<p class="min">{{pokemon.name}}</p>
					<img class="star" src="./../assets/img/star.png" alt="" style="max-width: 50px">
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
		limit: 0
		}
	},
  mounted () {
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });
    this.loadMore();
  },
  methods: {
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
			.then(response => (this.pokemones = response.data.results))
		},
		getInfo(index) {
			console.log(index)
			this.details = index
		}
	},

}
</script>