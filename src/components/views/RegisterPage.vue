<template>
<section>
  <div class="container py-5">
    <div class="mb-3">
      <label for="event_name" class="form-label">Musaabaqah Name</label>
      <input type="text" class="form-control" id="event_name" v-model="name">
    </div>
    <div class="mb-3">
      <label for="question" class="form-label">No of Question per Participant</label>
      <input type="number" class="form-control" id="question" v-model="question">
    </div>
    <div class="mb-3">
      <label for="time" class="form-label">Total time for each Participant</label>
      <input type="number" class="form-control" id="time" v-model="time">
    </div>

    <button class="btn btn-lg btn-success" @click="register">Register</button>

  </div>

</section>
</template>


<script>
import axios from "axios";
import swal from 'sweetalert'

export default{
  name: "RegisterPage",
  data(){
    return {
      name: "",
      question: "",
      time: "",
    }
  },
  methods: {
    async register() {
      try {
        await  axios.post("https://musaabaqah.onrender.com/api/v1/competition", { name: this.name, question: this.question, time: this.time })
        swal("Congratulation", "Event created successfully", "success");
        this.question = "";
        this.name = "";
      }catch (e){
        swal("00ps!", "Please try again", "error");
      }
    }
  }
}
</script>


<style scoped>

</style>