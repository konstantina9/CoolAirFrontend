<template id="v-for-object" class="demo">
  <div>
    <div v-for="(value,index) in response.results">
      <b-card :title="response.results[thisIndex(index)].carrier_code" :sub-title="response.results[thisIndex(index)].carrier_name">
        <b-card-text>
           {{ value }}
        </b-card-text>
        <img src="./assets/airplane.png" width="35" height="35">
        <b-button
          href="/AllStatistics"
          variant="outline-primary"
          size="sm">
          Statistics
        </b-button>
      </b-card>
    </div>
    <!-- Next & Previous pages buttons -->
    <div class="text-center">
      <b-button-group class="mx-1">
        <b-button v-on:click="getPage(response.previous)" variant="outline-dark">Previous</b-button>
        <b-button v-on:click="getPage(response.next)" variant="outline-dark">Next>></b-button>
      </b-button-group> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carriers',
    data() {
      return {
        response: null,
        next_page_url: null,
        prev_page_url: null
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
      }
    },
    mounted () {
      this.$http
        .get("http://127.0.0.1:8000/api/v1/carriers/")
        .then(response => (this.response = response.data))
    }
  }
</script>
