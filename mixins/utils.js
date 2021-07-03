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
	},
  computed: {
    search() {
      return this.$store.state.pokemon.isSearch;
		},
    get() {
      return this.$store.state.pokemon.pokemones;
    },
  },
}