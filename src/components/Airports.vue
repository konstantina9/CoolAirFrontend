<template id="v-for-object" class="demo">
  <div>
    <airport :my_airport=title v-show="show_airport" />
    <div v-show="show_airports">
      <div v-for="(value,index) in response.results">
        <b-card v-bind:title="response.results[thisIndex(index)].airport_code" :sub-title="response.results[thisIndex(index)].airport_name">
          <img src="./assets/airport.png" width="35" height="35">
          <b-button
            variant="outline-primary"
            size="sm"
            >
            More info 
          </b-button>
        </b-card>
      </div>
    <br>
    <!-- Next & Previous pages buttons -->
    <div class="text-center">
      <b-button-group class="mx-1">
        <b-button v-on:click="getPage(response.previous)" variant="outline-dark">Previous</b-button>
        <b-button v-on:click="getPage(response.next)" variant="outline-dark">Next>></b-button>
      </b-button-group> 
    </div>
    </div>
  </div>
</template>

<script>
  import airport from './airport'

  export default {
    name: 'Airports',
    data() {
      return {
        response: null,
        next_page_url: null,
        prev_page_url: null,
        show_airports: true,
        airport_name: null,
        show_airport: true,
        title: 'ATL'
      }
    },
    methods: {
      thisIndex: function (index) {
        return index
      },
      getPage: function(page_url){
        this.$http
        .get(page_url)
        .then(response => (this.response = response.data))
      },
      showAirport: function(){
        ai

      }
    },
    mounted () {
      this.$http
        .get("http://127.0.0.1:8000/api/v1/airports/")
        .then(response => (this.response = response.data))
    },
    components: {
      airport
    }
  }
</script>
