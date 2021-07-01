<template>
  <div class="container">
   <div class="align-index">
      <img src="./../assets/img/pikachu.png" alt="">
   </div>
      <h1 class="align-index title">{{welcome}}</h1>
      <div class="container-pr">
        <p class="pr">{{paragraph}}</p>
      </div>
      <div class="align-index">
        <NuxtLink to="/pokedex" class="delete-decorator">
          <button class="align-index button">{{go}}</button>
        </NuxtLink>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      welcome: 'Welcome to Pokédex',
      paragraph: 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.',
      go: 'Get Started'
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');
body {
  /* font-family: 'Lato', sans-serif; */
  background: #E5E5E5;
  box-sizing: content-box;
}
.align-index {
  display: flex;
  justify-content: center;
}
.title {
  color: #353535;
  font-weight: bold;
}
.container-pr {
  display: flex; 
  justify-content: center;
}
.button {
  background: #F22539;
  border: none;
  border-radius: 60px;
  color: white;
  width: 131px;
  height: 44px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.delete-decorator {
  text-decoration: none;
}
@media (min-width: 360px) { 
  .pr {
    max-width: 300px;
    font-size: 18px;
  }
  .button {
    margin-top: 30px;
  }
 }
@media (min-width: 576px) { }

@media (min-width: 768px) {  }

@media (min-width: 992px) {  }

@media (min-width: 1200px) { 
  .container {
    padding: 50px 0px;
  }
  .title {
    margin-top: 50px;
  }
  .button {
    margin-top: 50px;
  }
  .pr {
    color: #948181;
    max-width: 500px;
    text-align: center;
  }
 }

</style>
