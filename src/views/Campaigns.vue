<template>
<div>
  <h1>Kampagnen</h1>
  <br/><br/>
  <v-data-table
    :footer-props="footerProps"
    :items-per-page="10"
    :headers="headers"
    :items="campaigns"
    class="elevation-1"
  >
  <template v-slot:item.id="{ item }">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn text icon color="primary" to="/" v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <span>Kampagne {{ item.intern_id }} öffnen</span>
    </v-tooltip>
  </template>
  </v-data-table>
</div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      footerProps: {
        'items-per-page-options': [10, 50, 100]
      },
      headers: [
        {
          text: '',
          value: 'id',
        },
        {
          text: 'InternID',
          value: 'intern_id'
        },
        {
          text: 'Kampagnenname',
          value: 'name'
        },
        {
          text: 'Erstellt',
          value: 'ts_created'
        }
      ],
    }
  },
  mounted() {
    this.$store.dispatch('loadCampaigns');
  },
  computed: mapState(["campaigns"])
}
</script>
