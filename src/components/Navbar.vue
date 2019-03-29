<template>

  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand :to="{ name: 'Home' }"> <img src="./assets/world.png" width="35" height="35"> CoolAir API </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="/Airports"> Airports </b-nav-item>
      <b-nav-item href="/Carriers"> Carriers </b-nav-item>
      <b-nav-item href="/AllStatistics"> Statistics </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  
</template>

<script>
export default {
  name: 'Navbar'
};
</script>
