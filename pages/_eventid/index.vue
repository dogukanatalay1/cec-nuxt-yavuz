<template>
  <div>
    <EventsEventDetail v-if="singleEvent" :single-event="singleEvent" />
    <!-- <EventsSingleEvent v-if="singleEvent" :single-event="singleEvent" /> -->
    <div v-else>
      <h1>Etkinliğin ayrıntı bilgileri bulunamadı...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventDetailPage',
  data () {
    return {
      singleEvent: null
    }
  },
  created () {
    console.log(this.$route.params.eventid)
    this.getSingleEvent(encodeURI(this.$route.params.eventid))
    // this.nameConvertUTF('yaklaşan ığğğ')
    // encodeURI(this.$route.params.eventid)
    console.log(
      this.nameConvertUTF('Naber uşağum üzüldün mü, çünkü üzgün görünüyorsun?')
    )
  },
  methods: {
    getSingleEvent (eventId) {
      this.$API.events.getSingleEvent(eventId).then((response) => {
        // window.console.log(response.data)
        this.singleEvent = response.data
      })
    },
    nameConvertUTF (name) {
      if (name) {
        // const utfName = encodeURI(name)
        // console.log(utfName)
        const utfName = name
          .replaceAll('ğ', 'g')
          .replaceAll('Ğ', 'G')
          .replaceAll('ç', 'c')
          .replaceAll('Ç', 'C')
          .replaceAll('Ö', 'O')
          .replaceAll('ö', 'o')
          .replaceAll('ü', 'u')
          .replaceAll('Ü', 'U')
          .replaceAll('Ş', 'ş')
          .replaceAll('ş', 's')
          .replaceAll('İ', 'I')
          .replaceAll('ı', 'i')
        return utfName
      }
    }
  }
}
</script>
