<template>
<div class="align-table">
	<div v-for="pokemon in pokemones" v-bind:key="pokemon.id">
		<div class="align-pokemones">
			<p class="min">{{pokemon}}</p>
			<img class="star" src="./../assets/img/star.png" alt="">
		</div>
	</div>
</div>
</template>

<script>
export default {
	data () {
		return {
				pokemones: ['Bullbasaur', 'Ivysaur', 'Venusaur']
		}
	}
}
</script>

<style scoped>

.align-table {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}
.align-pokemones {
  display: flex;
  justify-content: center;
  display: flex;
	justify-content: space-between;
	background: white;
	width: 570px;
	margin-bottom: 10px;
	border-radius: 5px;
	padding: 0px 30px;
}
.min {
	min-width: 200px;
}
@media (min-width: 360px) { 
	.align-pokemones {
		width: 300px
	}
 }
@media (min-width: 576px) { }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (min-width: 1200px) { 
	.align-pokemones {
		width: 570px;
	}
 }
</style>