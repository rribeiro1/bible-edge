<template>
  <div id="app">
    <Book></Book>
    <Verse></Verse>
  </div>
</template>

<script>
import Book from './components/Book'
import Verse from './components/Verse'

export default {
  name: 'App',
  components: { Book, Verse }
}
</script>

<style>
</style>
