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
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text icon color="primary" v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon color="primary">mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Bearbeiten</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>

  <template v-slot:item.ts_created="{ item }">
    {{ createdTs }}
  </template>

  </v-data-table>
</div>
</template>

<script>
import moment from 'moment';

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
      on: "",
    }
  },
  created() {
    this.$store.dispatch('loadCampaigns');
  },
  methods: {
    formatTs(ts) {
      return moment(ts).format('DD.MM.YYYY HH:mm:ss');
    }
  },
  computed: {
    campaigns: function() {
      return this.$store.state.campaigns
    },
    createdTs: function() {
      return moment(this.$store.state.campaigns.ts_created).format('DD.MM.YYYY HH:mm:ss');
    }
  }
}
</script>
