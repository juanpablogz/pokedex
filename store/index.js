export const state = () => ({
  pokemons: [],
  pokemon: [],
  isSearch: false,
  navigation: false,
  modal: false,
  listFavorites: [],
  enter: false,
  error: false
})

export const mutations = {
  setPokemons (state, pokemons) {
    state.pokemons = pokemons
  },
  setPokemon (state, pokemon) {
    state.pokemon = pokemon
  },
  setModal (state, modal) {
    state.modal = modal
  },
  setSearch (state, search) {
    state.isSearch = search
  },
  setError (state, error) {
    state.error = error
  },
  setFavorites (state, favorites) {
    state.listFavorites = favorites
  },
  setNavigation (state, navigation) {
    state.navigation = navigation
  },
  updateEnter (state, opened) {
    state.enter = opened
  },
  // updateError (state, opened) {
  //   state.error = opened
  // },
  setListFavorites (state, add) {
    Array.prototype.unique=function(a){
      return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
    });
    console.log(add)
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites != null) {
      state.listFavorites = favorites
    }
    state.listFavorites.push(add + 1)
    localStorage.setItem('favorites',JSON.stringify(state.listFavorites.unique()))
  }  
}

export const getters = {
  pokemons (state) {
    return state.pokemons
  },
  pokemonOne (state) {
    return state.pokemon
  },
  modal (state) {
    return state.modal
  },
  search (state) {
    return state.isSearch
  },
  error (state) {
    return state.error
  },
  navigation(state) {
    return state.navigation
  }
}
