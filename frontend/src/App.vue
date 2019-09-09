<template>
  <div id="app">
    <navBar />
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import navBar from './components/navBar';
import axios from 'axios';
export default {
  name: 'App',
  components: { navBar },
  methods: {
    async userData() {
      axios
        .post('http://localhost:3000/api/user/', {}, { withCredentials: true })
        .then(res => this.$store.commit('SET_USER', res.data))
        .catch(err => console.log('User unavtoraised'));
    },
  },
  mounted() {
    this.userData();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
