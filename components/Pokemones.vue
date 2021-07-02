<template>
<div>
<div class="container-table">
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <img src="./../assets/img/loader.png" alt="" style="max-width: 30px">
      </div>
    </transition>
		
		<div  class="align-table" id="infinite-list">
			<div v-for="(pokemon, index) in pokemones" v-bind:key="pokemon.id" class="list-group-item">
				<div class="align-pokemones" @click="getInfo(index)">
					<p class="min">{{pokemon.name}}</p>
					<img class="star" src="./../assets/img/star.png" alt="" style="max-width: 50px">
				</div>
			</div>
		</div>
		<!-- {{pokemones[details]}} -->
  </div>
  
</div>

</div>
</template>

<script>
export default {
	data () {
		return {
    loading: false,
    nextItem: 1,
		items: [],
		pokemones: [],
		limit: 0,
		next: 'https://pokeapi.co/api/v2/ability/?limit=20',
		details: 0
		}
	},
  mounted () {
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();
	},
  methods: {
    	 loadMore () {
      
      this.loading = true;
      setTimeout(e => {
				this.limit = this.limit + 20
				console.log(this.limit)
				this.loading = false;
				this.getPokemon()
      }, 200);
      
		},
		getPokemon () {
    this.$axios
      .get(`https://pokeapi.co/api/v2/ability/?limit=${this.limit}`)
			.then(response => (this.pokemones = response.data.results, this.next = response.data.next))
		},
		getInfo(index) {
			console.log(index)
			this.details = index
		}
	},

}
</script>

<style>
.container-table {
	display: flex;
	flex-direction: column;
	align-items: center;	
	/* border:solid red; */
}
.align-table {
  overflow: auto;
  height: 50vh;
	border: 2px solid #dce4ec;
  border-radius: 5px;
	border: none;
}
.align-pokemones {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: space-between;
	background: #FFFFFF;
	width: 570px;
  margin-bottom: 10px;
  border-radius: 5px;
	padding: 0px 30px;
	cursor: pointer;
}
.min {
  min-width: 200px;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  /* background: purple; */
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
@media (min-width: 360px) { 
  .align-pokemones {
    width: 300px
  }
 }
@media (min-width: 576px) { }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (min-width: 1200px) { 
  .align-pokemones {
    width: 570px;
  }
 }
</style>