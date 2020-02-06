<!-- App.vue -->
<template>
<v-app>
  <v-app-bar app>
    <router-link to="ayaan"><v-btn>Ayaan Khan</v-btn></router-link>
    <v-spacer></v-spacer>
    <router-link to="hashir"><v-btn>Hashir Niazi</v-btn></router-link>
    <v-spacer></v-spacer>
    <router-link to="zulkifl"><v-btn>Zulkifl Khairoowala</v-btn></router-link>
  </v-app-bar>
  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container >
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: "App",
  data()
  {
    return{
      ayaankhan: {
        name: "Ayaan Khan",
        age: "20",
        img: "",
        qual: "AMU undergrad"
      },
      hashirniazi: {
        name: "Hashir Niazi",
        age: "18",
        img: "",
        qual: "AMU undergrad"
      },
      zulkifl: {
        name: "Zulkifl Khairoowala",
        age: "17",
        img: "",
        qual: "AMU undergrad"
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
