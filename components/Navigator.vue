<template>
<div class="navigator">
		<div class="align-buttons">
			<button class="button">All</button>
			<button class="button favorites">Favorites</button>
		</div>
</div>
</template>

<script>
export default {

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
  background: #F22539;
  border: none;
  border-radius: 60px;
  color: white;
  width: 200px;
  height: 44px;
  display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-right: 15px;
	margin-top: 20px;
}
.favorites {
	background: #BFBFBF;
}
</style>