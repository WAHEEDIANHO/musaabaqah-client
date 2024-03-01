<template>
  <section>
    <div class="w-100 pt-80 black-layer pb-70 opc65 position-relative">
      <div class="fixed-bg" :style="`background-image: url(${require('@/assets/images/page-title-bg.jpg')})`"></div>
      <div class="d-flex w-75 m-auto flex-row justify-content-between align-items-center">

        <router-link to="/" class="border border-white badge rounded-circle">
          <i class="fas fa-arrow-left fa-2x text-white rounded-circle" />
        </router-link>
        <div class="page-title-wrap text-center w-100">
          <div class="page-title-inner d-inline-block">
            <h1 v-if="$route.path.indexOf('master-moderator') >= 0" class="mb-0">MASTER-JUDGE</h1>
            <h1 v-else class="mb-0">JUDGE</h1>
            <ol class="breadcrumb mb-0">
              <!--                  <li class="breadcrumb-item">SAFIU WAHEED</li>-->
              <!--                  <li class="breadcrumb-item active">Modrasha</li>-->
            </ol>
          </div>
        </div>
        <button v-if="$route.path.indexOf('master-moderator') >= 0" class="btn btn-lg btn-outline-success" @click="done">Next Participant</button>
      </div>
    </div>
  </section>

  <section v-if="questions.length === 0 && !awaitParticipant">
    <div class="w-100 pt-120 pb-280 position-relative">
      <div class="px-4 w-75 mx-auto d-flex flex-column align-items-center">
        <label class="display-4" for="juz-memorize">Juz Memorized?</label>
        <select class="form-control" id="juz-memorize" type="number" v-model="juzz_no">
<!--          <template v-if="$route.path.indexOf('master-moderator') >= 0">-->
            <option v-for="el in available_range" :key="el" :value="el">{{el}}</option>
<!--          </template>-->
        </select>
        <button v-if="$route.path.indexOf('master-moderator') >= 0" @click="showJuzzRange" class="btn btn-success btn-lg w-50 mt-20">Next</button>
      </div>
    </div>
  </section>

  <section v-else-if="awaitParticipant && questions.length === 0">
    <div class="container-fluid">
      <div class="row" style="height: calc(100vh - 155.89px)">
        <div class="col-6 p-0 h-100 side-img"
             :style="`background-image: url(${require('@/assets/images/quran.jpg')})`"
        >
        </div>
        <div class="col-6 text-center d-flex flex-column justify-content-center align-items-center">
          <h1>Please wait for participant to pick question</h1>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block; shape-rendering: auto;" width="100px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(80,50)">
              <g transform="rotate(0)">
                <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="1">
                  <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"/>
                </circle>
              </g>
            </g><g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.875">
                <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"/>
              </circle>
            </g>
          </g><g transform="translate(50,80)">
            <g transform="rotate(90)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.75">
                <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"/>
              </circle>
            </g>
          </g><g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.625">
                <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"/>
              </circle>
            </g>
          </g><g transform="translate(20,50.00000000000001)">
            <g transform="rotate(180)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.5">
                <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"/>
              </circle>
            </g>
          </g><g transform="translate(28.78679656440357,28.786796564403577)">
            <g transform="rotate(225)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.375">
                <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"/>
              </circle>
            </g>
          </g><g transform="translate(49.99999999999999,20)">
            <g transform="rotate(270)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.25">
                <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"/>
              </circle>
            </g>
          </g><g transform="translate(71.21320343559643,28.78679656440357)">
            <g transform="rotate(315)">
              <circle cx="0" cy="0" r="6" fill="#0a0a0a" fill-opacity="0.125">
                <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"/>
              </circle>
            </g>
          </g>
            <!-- [ldio] generated by https://loading.io/ --></svg>
        </div>
      </div>
    </div>
  </section>

  <section v-else>
    <div class="w-100 pt-120 pb-280 position-relative">
<!--      <img class="sec-botm-rgt-mckp img-fluid position-absolute" :src="require('@/assets/images/sec-botm-mckp.png')" alt="Sec Bottom Mockup">-->
      <div class="container-fluid px-5">
        <div class="serv-wrap wide-sec">
          <div class="row px-5 justify-content-center flex-row-reverse mrg10">
            <div style="cursor: pointer" class="col-md-6 col-sm-6 col-lg-3"  v-for="({chapter, verse, preview, page}, i) in questions" :key="i" @click="() => showQuranPreview(chapter, verse)">
              <div class="serv-box text-center pat-bg gray-layer opc8 position-relative back-blend-multiply gray-bg w-100" :style="`background-image: url(${require('@/assets/images/patternBg.jpg')})`">
                <i class="flaticon-quran thm-clr"></i>
                <h3 class="mb-2">{{`pg${page} Q${chapter}:${verse}`}}</h3>
                <div class="d-flex justify-content-between">
                  <p style="font-family: uthmani; font-size: 24px; line-height: 2" class="alignright" v-html="preview[0]['text_uthmani_tajweed'].replace('tajweed', 'span')"></p>
                </div>
              </div>
            </div>

          </div>
        </div><!-- Services Wrap -->
      </div>
    </div>
    <TimeCounter :maxTime="this.$route?.query?.time" />
  </section>
  <TimeCounter :maxTime="this.$route?.query?.time"/>
</template>

<script>
import io from 'socket.io-client'
import TimeCounter from "@/components/widget/TimeCounter.vue";
// import axios from 'axios'

export default {
   name: 'ModeratorPage',
  components: {TimeCounter},
   data () {
       return {
          questions: [],
          chapters: [],
          socket: io('https://musaabaqah.onrender.com'),
          juzz_no: null,
          available_range: [1,3, 5, 10, 15, 20, 30],
         awaitParticipant: false
       }
   },

    mounted () {
            this.$nextTick(async function() {
              //console.log(this.$route.path)
              const { query } = this.$route || {};
                this.socket.emit("JOIN", {room: query?.name})
                this.socket.on('GENERATE_QUESTION', question => {
                  this.questions = question.message
                  this.$store.dispatch('getChapters', question.message)
                  this.chapters = this.$store.state.chapters
                });


              this.socket.on('DONE', () => {
                this.questions= [];
                this.juzz_no= null;
                this.chapters= [];
                this.awaitParticipant= false;
              });

              this.socket.on("ERROR", (error)=>{
                console.log(error)
              })

            })
    },
  methods: {
    showJuzzRange() {
      this.socket.emit("JUZ_RANGE_SELECTION", { message: {juz_range: this.juzz_no}, room: this.$route.query?.name });
      this.awaitParticipant = true;
    },

    done() {
      this.socket.emit("DONE", { room: this.$route.query?.name })
    },

    showQuranPreview (chapter, verse)  {
      // e.preventDefault()
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      window.open(`https://quran.com/${chapter}?startingVerse=${verse}`, "window", `popup, left=100,top=100,width=${width*3/4},height=${height}`)
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: uthmani;
  src: url("@/assets/UthmanicHafs1Ver18.woff2");
}

.side-img{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}
</style>
