<template>
  <div class="book">
    <md-autocomplete v-model="value" :md-options="books">
      <label>Livro</label>
      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-highlight-text @click.native="hit(item)" :md-term="term">{{ item.name }}</md-highlight-text>
      </template>
    </md-autocomplete>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Book',
  data: () => ({
    value: null,
    books: []
  }),
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('http://localhost:3003/books/')
        .then(response => {
          this.books = response.data.books
        })
        .catch((err) => {
          console.log(err)
        })
    },
    searchTerm () {
      console.log(`Cliquei no livro ${this.book[0].name}`)
    }
  }
}
</script>

<style>
.book {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
}
</style>
