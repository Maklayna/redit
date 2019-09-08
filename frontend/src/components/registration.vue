<template>
  <form @submit.prevent="registration" style="display:flex; justify-content:center; width: 400px;">
    <fieldset>
      <legend>Зарегистрироваться</legend>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="username"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
         v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
     registration () {
         axios.post('http://localhost:3000/api/registration/',{
           username: this.username,
           password: this.password
           }
         )
         .then(res=>this.$router.push('/'))
     } 
  }
};
</script>

<style >
</style>