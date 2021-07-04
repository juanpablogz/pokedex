<template>
  <div class="navigator">
    <div class="align-buttons">
      <button class="button" :class="navigation == 'all' ? 'current': '' " @click="setNavigation('all')">
        <img class="icon-align" src="./../assets/img/all.png" alt="" />
        All
      </button>
      <button class="button" :class="navigation == 'favorites' ? 'current': ''" @click="setNavigation('favorites')">
				<img class="icon-align" src="./../assets/img/favorite.png" alt="">
        Favorites
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	methods: {
    ...mapMutations(['setNavigation']),
  },
  computed: {
    ...mapGetters(['navigation'])
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
  margin-top: 10px;
}
.current {
	background: #f22539;
}
</style>
