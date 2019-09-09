
<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="mb-5">Загрузить изображение:</h1>
    <form @submit.prevent="fileUpload" style="display:flex; justify-content:center; width: 400px;">
      <fieldset>
        <div class="form-group">
          <label for="exampleInputFile">File input</label>
          <input
            ref="file"
            type="file"
            class="form-control-file"
            id="exampleInputFile"
            aria-describedby="fileHelp"
          />
          <small
            id="fileHelp"
            class="form-text text-muted"
          >This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
    };
  },
  methods: {
    fileUpload() {
      console.log(this.$refs.file.files)
      const image=new FormData()
      image.append(this.$refs.file.files[0].name,this.$refs.file.files[0])
      axios.post('http://localhost:3000/api/images/',image, { withCredentials: true })
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>