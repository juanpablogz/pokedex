export const state = () => ({
  pokemons: [],
  pokemon: [],
  isSearch: false,
  navigation: 'all',
  modal: false,
  listFavorites: [],
  goToApp: false,
  error: false,
  validationRequest: false,
  loading: false,
  home: false,
  textSearch: '',
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
  setGoToApp (state, opened) {
    state.goToApp = opened
  },
  setError (state, error) {
    state.error = error
  },
  setValidationRequest (state, validationRequest) {
    state.validationRequest = validationRequest
  },
  setLoading (state, loading) {
    state.loading = loading
  },
  setHome (state, home) {
    state.home = home
  },
  setTextSearch (state, search) {
    state.textSearch = search
  },
  setListFavorites (state, add) {
    Array.prototype.unique=function(a){
      return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
    });
    console.log(add)
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites != null) {
      state.listFavorites = favorites
    }
    state.listFavorites.push(add)
    localStorage.setItem('favorites',JSON.stringify(state.listFavorites.unique()))
  }
}

export const getters = {
  pokemons (state) {
    return state.pokemons
  },
  pokemonsFound (state) {
    return state.pokemon
  },
  modal (state) {
    return state.modal
  },
  search (state) {
    return state.isSearch
  },
  navigation(state) {
    return state.navigation
  },
  goToApp (state) {
    return state.goToApp
  },
  error (state) {
    return state.error
  },
  loading (state) {
    return state.loading
  },
  home (state) {
    return state.home
  },
  textSearch () {
    return state.textSearch
  }
}
