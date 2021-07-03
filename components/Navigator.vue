<template>
  <div class="navigator">
    <div class="align-buttons">
      <button class="button" @click="updateButttonFavorites(false)">
        <img class="icon-align" src="./../assets/img/all.png" alt="" />
        All
      </button>
      <button class="button favorites" @click="updateButttonFavorites(true)">
				<img class="icon-align" src="./../assets/img/favorite.png" alt="">
        Favorites
      </button>
    </div>
  </div>
</template>

<script>
import utils from '@/mixins/utils'
export default {
  mixins: [utils],
	data () {
		return {
		}
	},
  mounted () {
	},
	methods: {
	},
  computed: {
  },
}
</script>
