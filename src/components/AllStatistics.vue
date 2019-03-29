<template>

  <div role="tablist">

    <!-- List of types of requests: -->
    <br>
    <b-card header=
        <img src="./assets/statistics.png" width="35" height="35">
        <strong> Types of requests:</strong>
    <b-list-group>
      <b-list-group-item> {{ text1 }} </b-list-group-item>
      <b-list-group-item> {{ text2 }} </b-list-group-item>
      <b-list-group-item> {{ text3 }} </b-list-group-item>
      <b-list-group-item> {{ text4 }} </b-list-group-item>
    </b-list-group> <br>

    <!-- Radio group: -->
    <b-form-group label="Choose your request: ">
      <b-form-radio-group
        id="btnradio"
        buttons
        button-variant="outline-primary"
        size="sm"
        v-model="selected"
        :options="options"
        name="radioBtnOutline"
      />
    </b-form-group>

    <!-- Forms for each choice & submit btns: -->
    <div v-if="selected == 'radio1'">
      <b-form>
        <div class="form-row">
          <div class="col">
            <input v-model="airport_code" type="text" class="form-control" placeholder="Airport">
          </div>
          <div class="col">
            <input v-model="carrier_code" type="text" class="form-control" placeholder="Carrier">
          </div>
          <div class="col">
            <input v-model="date_label" type="text" class="form-control" placeholder="Date">
          </div>
        </div>
      </b-form>
      <b-form-text>
        {{ exampletxt1 }}
      </b-form-text>
      <b-button v-on:click="getStats(airport_code,carrier_code,date_label)" variant="success" >Submit!</b-button>
      <!-- printing them just to make sure that theyre being stored: -->
      <div class="mt-2">Values entered: {{ airport_code }} , {{ carrier_code }}, {{ date_label }}, {{showstats}} </div>

      <div v-for="(myvalue,index) in data.response.results">
        {{ myvalue }}
      </div>

    </div>
    <div v-else-if="selected == 'radio2'">
      <b-form>
        <div class="form-row">
          <div class="col">
            <input v-model="airport_code" type="text" class="form-control" placeholder="Airport">
          </div>
          <div class="col">
            <input v-model="carrier_code" type="text" class="form-control" placeholder="Carrier">
          </div>
          <div class="col">
            <input v-model="date_label" type="text" class="form-control" placeholder="Date (Optional)">
          </div>
        </div>
      </b-form>
      <b-form-text>
        {{ exampletxt1 }}
      </b-form-text>
      <b-button variant="success" href="#" >Submit!</b-button>
    </div>
    <div v-else-if="selected == 'radio3'">
      <b-form>
        <div class="form-row">
          <div class="col">
            <input v-model="airport_code" type="text" class="form-control" placeholder="Airport (Optional)">
          </div>
          <div class="col">
            <input v-model="carrier_code" type="text" class="form-control" placeholder="Carrier">
          </div>
          <div class="col">
            <input v-model="date_label" type="text" class="form-control" placeholder="Date (Optional)">
          </div>
          <div class="col">
            <input v-model="reason_label" type="text" class="form-control" placeholder="Reasons">
          </div>
        </div>
      </b-form>
      <b-form-text>
        {{ exampletxt3 }}
      </b-form-text>
      <b-button variant="success" href="#" >Submit!</b-button>
    </div>
    <div v-else-if="selected == 'radio4'">
      <b-form>
        <div class="form-row">
          <div class="col">
            <input v-model="airport_code" type="text" class="form-control" placeholder="Airport 1">
          </div>
          <div class="col">
            <input v-model="airport2_code" type="text" class="form-control" placeholder="Airport 2">
          </div>
          <div class="col">
            <input v-model="carrier_code" type="text" class="form-control" placeholder="Carrier (Optional)">
          </div>
        </div>
      </b-form>
      <b-form-text>
        {{ exampletxt4 }}
      </b-form-text>
      <b-button variant="success" href="#" >Submit!</b-button>
    </div>
    <div v-else>
      Please select an option for the corresponding form to appear.
    </div>

  </div>
</template> 


<script>
export default {
  data() {
    return {
      text1: `
        Option A: Statistics about the flights of a specific carrier in a particular month.
      `,
      text2: `
        Option B: Number of on-time, delayed, and cancelled flights of a carrier to a US airport, either for a given month, or all months available.
      `,
      text3: `
        Option C: Number of minutes of delay per carrier attributed to carrier-specific reasons (or not) for a specific or all available months and airports.
      `,
      text4: `
        Option D: Descriptive statistics(mean, meadian, standard deviation) for carrier-specific delays (as above) for a flight between any two airports in the USA for a specific carrier/all carriers serving this route.
      `,
      exampletxt1:`
        Example: ATL, AA, 2003/6
      `,
      exampletxt3:`
        Example: ATL, AA, security
      `,
      exampletxt4:`
        Example: ATL, BOS, AA
      `,
      airport_code: '',
      carrier_code: '',
      date_label: '',
      reason_label: '',
      airport2_code:'',
      selected: '',
      showstats: false,
      options: [
        { text: 'Statistics', value: 'radio1' },
        { text: 'Number of flights', value: 'radio2' },
        { text: 'Number of delays', value: 'radio3' },
        { text: 'Descritpive Statistics', value: 'radio4' }
      ],
      response: null,
      methods: {
        thisIndex: function (index) {
          return index
        },
        getPage: function(page_url){
          this.$http
          .get(page_url)
          .then(response => (this.response = response.data))
        },
        getStats: function(airport_code,carrier_code,date_label){    /*Statistics ...*/
          this.$http
          .get("http://127.0.0.1:8000/statistics/statistics/?airport="+airport_code+"&carrier="+carrier_code+"&time="+date_label)
          .then(response => (this.response = response.data))
        },
        getNumbers: function(airport_code,carrier_code){    /*Number of flights ...*/
          this.$http
          .get("http://127.0.0.1:8000/statistics/numbers/?airport="+airport_code+"&carrier="+carrier_code)
          .then(response => (this.response = response.data))
        },
        getMinutes: function(airport_code,reason_labels){    /*Number of minutes ...*/
          this.$http
          .get("http://127.0.0.1:8000/statistics/minutes/?airport="+airport_code+"&reasons="+reason_label)
          .then(response => (this.response = response.data))
        },
        getDescrSt: function(airport_code,airport2_code,carrier_code){    /*Descriptive Statistics*/
          this.$http
          .get("http://127.0.0.1:8000/statistics/descriptive/?airport1="+airport_code+"&airport2="+airport2_code+"&carrier="+carrier_code)
          .then(response => (this.response = response.data))
        }
      }
    }
  }
}
</script>
