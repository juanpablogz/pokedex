<template>
  <div >
   <div class="align-index">
      <img src="./../assets/img/pikachu.png" alt="">
   </div>
      <h1 class="align-index title">{{welcome}}</h1>
      <div class="container-pr">
        <p class="pr">{{paragraph}}</p>
      </div>
      <div class="align-index">
          <button class="align-index button" @click="setGoToApp(true)">{{go}}</button>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data () {
    return {
      welcome: 'Welcome to Pokédex',
      paragraph: 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.',
      go: 'Get Started'
    }
  },
  methods: {
      ...mapMutations(['setGoToApp']),
  },
  mounted () {
  this.setGoToApp(false)
  let favorites = JSON.parse(localStorage.getItem('favorites'));
  if (favorites == null) {
    localStorage.setItem('favorites',JSON.stringify([]))
  }
  }
}
</script>


<style scoped>
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
