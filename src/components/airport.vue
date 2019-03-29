<template id="v-for-object" class="demo">
  <div>
    <h1>{{ my_airport }}</h1>
    <div v-for="(value,index) in response.results">
      <div v-if="my_airport==response.results[thisIndex(index)].airport_code"
        <b-card :title="response.results[thisIndex(index)].airport_code" :sub-title="response.results[thisIndex(index)].airport_name">
          <b-card-text>
             {{ value }}
          </b-card-text>
          <b-button
            href="/AllStatistics"
            variant="outline-primary"
            size="sm">
            Go to Statistics page
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Airports',
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
        .get("http://127.0.0.1:8000/api/v1/airports/")
        .then(response => (this.response = response.data))
    },
    props: {
      my_airport: String
    }
  }
</script>
