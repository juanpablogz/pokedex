export default {
	methods: {
    changeState (val) {
      this.$store.commit("updateStateIsSearch", val);
    },
    changeModal (val) {
      this.$store.commit("updateModal", val);
    },
    updateButttonFavorites (val) {
      this.$store.commit("updateButttonFavorites", val);
    },
    updateEnter (val) {
      this.$store.commit("updateEnter", val);
    },
    updateError (val) {
      this.$store.commit("updateError", val);
    },
	},
  computed: {
    // search() {
    //   return this.$store.state.isSearch;
		// },
    // modal() {
    //   return this.$store.state.modal;
    // },
    // findPokemon() {
    //   return this.$store.state.pokemons;
    // },
    button() {
      return this.$store.state.butttonFavorites;
    },
    // pokemon() {
    //   return this.$store.state.pokemon;
    // },
    enter() {
      return this.$store.state.enter;
    },
    error() {
      return this.$store.state.error;
    },
  },
}