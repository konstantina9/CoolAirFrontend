<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>
