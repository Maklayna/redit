
<template>
  <div class="home">
    <h1>{{isLogin}}</h1>
    <p>{{msg}}</p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'secret',
  data() {
    return {
      msg: 'Совсем ничего',
    };
  },
  computed: {
    isLogin: function() {
      if (!this.$store.state.curentUser) {
        this.msg='либо вы не авторизованы'
        return 'Здесь ничего нет!'
      } else {
        return 'Вы можете увидеть секретную информацию!'
      }
    }
  },
  methods: {
      async getData() {
      try{
      let result= await axios.post('http://localhost:3000/api/secret/', {}, { withCredentials: true })
      this.msg= await result.data;
      } catch(e) {
        this.msg='Либо вы не авторизованы'
        console.log(e)
      }  
        
    },
  },
  mounted() {
    this.getData()
  }

};
</script>

<style scoped>
</style>