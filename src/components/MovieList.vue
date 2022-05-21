<template>
  <div class="hello">
    <h1>Welcome to Nolly-Flix</h1>



    <h3>All Movies</h3>
    <ul>
      <li v-for="movie in sortedMovies" v-bind:key="movie.title">
        {{movie.title}}

        <button @click="movie.likes++">Like ({{movie.likes}})</button>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'MovieList',

  data(){
    return {
      movies:[
        {title: "The Redemption", likes:0},
        {title: "Africa’s Tech Roots", likes:4},
        {title: "The Invisible Man", likes:2},
        {title: "The Complicated Project", likes:3},
        {title: "Simply Javascript", likes:6},
        {title: "The New Web", likes:0},
      ]
    }
  },



  computed:{
    sortedMovies(){
      let moviesCopy = [...this.movies]
      return moviesCopy.sort((n1,n2) => n2.likes - n1.likes)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
}
a {
  color: #42b983;
}
</style>
