export default {
	data () {
		return {
		}
	},
  mounted () {
	},
	methods: {
    changeState (val) {
      this.$store.commit("pokemon/updateStateIsSearch", val);
    },
    changeModal (val) {
      this.$store.commit("pokemon/updateModal", val);
    },
    updatePokemones (val) {
      this.$store.commit("pokemon/updatePokemones", val);
    },
    changeState (val) {
      this.$store.commit("pokemon/butttonFavorites", val);
    },
    updateButttonFavorites (val) {
      this.$store.commit("pokemon/updateButttonFavorites", val);
    },
    updatePokemon (val) {
      this.$store.commit("pokemon/updatePokemon", val);
    },
    updateEnter (val) {
      this.$store.commit("pokemon/updateEnter", val);
    },
	},
  computed: {
    search() {
      return this.$store.state.pokemon.isSearch;
		},
    modal() {
      return this.$store.state.pokemon.modal;
    },
    findPokemon() {
      return this.$store.state.pokemon.findPokemon;
    },
    button() {
      return this.$store.state.pokemon.butttonFavorites;
    },
    pokemon() {
      return this.$store.state.pokemon.pokemon;
    },
    enter() {
      return this.$store.state.pokemon.enter;
    },
  },
}