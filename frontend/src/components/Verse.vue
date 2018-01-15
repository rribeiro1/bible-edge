<template>
  <div class="card-versiculo">
    <md-card>
      <md-card-content>
        <p>{{ verse.text }}</p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Verse',
  data () {
    return {
      verse: {}
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('http://localhost:3003/books/0/chapters/1/verses/1')
        .then((resp) => {
          this.verse = resp.data.verse
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
p {
    text-align: center;
    font-size: 4.0em;
}

.card-versiculo {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
}

</style>
