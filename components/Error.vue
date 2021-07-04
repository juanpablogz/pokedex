<template>
  <div class="error setError" :class="home ? 'home': ''">
			<h2 v-show="!home">Uh-Oh!</h2>
			<p v-show="!home">You look lost on your journey!</p>
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
      "validationRequest",
      "home"
    ])
  },
  methods: {
    ...mapMutations([
      "setPokemons",
      "setError",
			"setSearch",
      "setValidationRequest",
      "setHome",
      "setTextSearch"
    ]),
    async returnIndex() {
      const request = await this.$axios.get(`?limit=${this.limit}`);
      if (request.status == 200) {
        this.setPokemons(request.data.results);
        this.setError(false);
        this.setSearch(false);
        this.setHome(false)
        this.setTextSearch('')
      }
    }
  }
};
</script>
<style>
.setError {
	position: absolute;
  width: 100%;
}
.home {
  margin-top: 100px;
}
</style>