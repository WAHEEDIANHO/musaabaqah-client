<template>
  <section>
   <div class="container py-5">
     <div class="team-wrap wide-sec2">
       <div class="row">
         <div class="col-md-6 col-sm-6 col-lg-3" v-for="(competition, i) in competitions" :key="i">
           <div class="team-box text-center w-100">
             <div class="team-img overflow-hidden position-relative w-100">
               <img class="img-fluid w-100" :src="require('@/assets/images/quran_hands.jpg')" alt="Team Image 1">
<!--               <div class="social-links2 text-center d-inline-flex position-absolute">-->
<!--                 <a class="facebook" href="https://www.facebook.com/" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>-->
<!--                 <a class="twitter" href="https://twitter.com/" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>-->
<!--                 <a class="youtube" href="https://www.youtube.com/" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>-->
<!--               </div>-->
             </div>
             <div class="team-info">
               <h3 class="mb-0">{{competition?.name}}</h3>
              <div class="d-flex flex-row justify-content-between">
                <router-link :to="`/moderator?name=${competition?.name}&question=${competition?.question}`" class="">Moderator</router-link>
                <router-link :to="`/participant?name=${competition?.name}&question=${competition?.question}`" class="">Participant</router-link>
              </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  </section>
</template>




<script>
import axios from "axios";

export default {
  name: "CompetitionPage",
  data () {
    return {
      competitions: []
    }
  },

  mounted() {
    this.$nextTick(async()=> {
       const { data: { data } } = await axios.get("https://musaabaqah.onrender.com/api/v1/competition");
       this.competitions = data;
    })
  }
}
</script>



<style scoped>

</style>