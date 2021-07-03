<template>
  <div class="error">
      <h2>Uh-Oh!</h2>
      <p>You look lost on your journey!</p>
      <button class="button" @click="back()">Go back home</button>
  </div>
</template>
<script>
import utils from '@/mixins/utils'
export default {
  mixins: [utils],
	data () {
		return {
			pokemonSearch: '',
			pokemones: '',
			errorSearch: false
		}
	},
	methods: {
    back () {
      this.$store.commit("pokemon/updateError", false)
    }
	},
}
</script>