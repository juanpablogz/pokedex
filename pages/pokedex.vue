<template>
<div>
	<div class="container">
		<div>
			<input type="text" placeholder="Search" v-model="pokemon">
			<i class="search">
				<img src="./../assets/img/search.png" alt="">
			</i>
		</div>
	</div>
	<Pokemones/>
	<Navigator/>
</div>
</template>

<script>
export default {
	data () {
		return {
			pokemon: ''
		}
	},
}
</script>

<style scoped>
.container { 
	height: 53px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
input {
		display: flex;
  	justify-content: center;
		width: 240px;
		height: 33px;
		border: 0px;
		padding-left: 40px;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
		border-radius: 5px;
}

.search {
		position: relative;
		/* left: 220px; */
		top: -32px;
		font-size: 28px;
		color: rgba(121, 121, 121, 0.8);
		transition: 0.3s ease;
		left: 10px;
		top: -42px;
}


@media (min-width: 360px) { 
	input {
			width: 315px;
			height: 50px;
			margin-top: 35px;
	}
	.container {
		margin-bottom: 50px;
	}
 }
@media (min-width: 576px) { }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (min-width: 1200px) { 
	input {
			width: 570px;
			height: 50px;
			margin-top: 35px;
	}
	.search {
			position: relative;
			left: 10px;
			top: -42px;
	}
	.container {
		margin-bottom: 0px;
	}
 }
</style>