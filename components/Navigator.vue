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

<style scoped>
.navigator {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 10vh;
}
.align-buttons {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
.button {
  background: #bfbfbf;
  border: none;
  border-radius: 60px;
  color: white;
  width: 275px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  margin-top: 20px;
}
.favorites {
	background: #f22539;
}
.icon-align {
	margin-right: 13px;
}
</style>
