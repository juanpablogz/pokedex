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
    button() {
      return this.$store.state.butttonFavorites;
    },
    enter() {
      return this.$store.state.enter;
    },
    error() {
      return this.$store.state.error;
    },
  },
}