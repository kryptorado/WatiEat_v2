<template>
  <v-app>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <Navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {Navbar},
  data () {
    return {
      //
    }
  }
}
</script>
