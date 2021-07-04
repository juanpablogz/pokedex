<template>
  <div class="navigator">
    <div class="align-buttons">
      <button class="button" @click="setNavigation(false)">
        <img class="icon-align" src="./../assets/img/all.png" alt="" />
        All
      </button>
      <button class="button favorites" @click="setNavigation(true)">
				<img class="icon-align" src="./../assets/img/favorite.png" alt="">
        Favorites
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	methods: {
    ...mapMutations(['setNavigation']),
	},
}
</script>

<style scoped>
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
</style>
