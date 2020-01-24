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
  ></v-data-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      footerProps: {
        'items-per-page-options': [10, 50, 100]
      },
      headers: [{
          text: '',
          value: 'id',
        },
        {
          text: 'InternID',
          value: 'internid'
        },
        {
          text: 'Betreff',
          value: 'subject'
        }
      ],
      campaigns: [
        {
          id: 1,
          internid: '20001',
          subject: 'Re: Ihr Kredit'
        },
        {
          id: 2,
          internid: '20002',
          subject: 'Wie viel ist Ihre Immobilie wert?'
        }
      ],
    }
  },
}
</script>
