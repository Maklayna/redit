<template>
  <div id="app">
    <navBar />
    <transition mode="out-in" name="fade" >
      <router-view />
    </transition>
  </div>
</template>

<script>
import navBar from './components/navBar';
export default {
  name: 'App',
  components: { navBar },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
