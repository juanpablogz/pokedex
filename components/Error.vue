<template>
  <div class="error setError">
			<h2>Uh-Oh!</h2>
			<p>You look lost on your journey!</p>
    <button class="button" @click="returnIndex()">Go back home</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "pokemons",
      "pokemonsFound",
      "navigation",
      "modal",
      "search",
			"error",
			"navigation",
			"validationRequest"
    ])
  },
  methods: {
    ...mapMutations([
      "setPokemons",
      "setError",
			"setSearch",
			"setValidationRequest"
    ]),
    async returnIndex() {
      const request = await this.$axios.get(`?limit=${this.limit}`);
      if (request.status == 200) {
        this.setPokemons(request.data.results);
        this.setError(false);
        this.setSearch(false);
      }
    }
  }
};
</script>
<style>
.setError {
	position: absolute;
	width: 100%
}
</style>