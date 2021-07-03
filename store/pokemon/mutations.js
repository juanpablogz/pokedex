export const updateStateIsSearch = (state, opened) => {
  state.isSearch = opened
}
export const updateButttonFavorites = (state, opened) => {
  state.butttonFavorites = opened
}
export const updateFind = (state, opened) => {
  state.findPokemon = opened
}
export const updateModal = (state, opened) => {
  state.modal = opened
}
export const updatePokemon = (state, opened) => {
  state.pokemon = opened
}
export const updateEnter = (state, opened) => {
  state.enter = opened
}
export const updateError = (state, opened) => {
  state.error = opened
}
export const updateListFavorites = (state, opened) => {
  Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });
  console.log(opened)
  let favorites = JSON.parse(localStorage.getItem('favorites'));
  if (favorites != null) {
    state.listFavorites = favorites
  }
  state.listFavorites.push(opened + 1)
  localStorage.setItem('favorites',JSON.stringify(state.listFavorites.unique()))
}