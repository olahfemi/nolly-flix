<template>
  <div class="hello">
    <h1>Welcome to Nolly-Flix</h1>

    <h3>Most Popular Movie</h3>

    <h3>All Movies</h3>
    <ul>
      <li v-for="movie in movies" v-bind:key="movie.title">
        {{movie.title}}

        <button @click="movie.likes++">Like ({{movie.likes}})</button>
      </li>

    </ul>
    <h3>Essential Links</h3>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data(){
    return {
      movies:[
        {title: "The Redemption", likes:0},
        {title: "Africa’s Tech Roots", likes:0},
        {title: "The Invisible Man", likes:0},
        {title: "The Complicated Project", likes:0},
        {title: "Simply Javascript", likes:0},
        {title: "The New Web", likes:0},
      ]
    }
  },

  props: {
    msg: String,
  },

  methods:{
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
