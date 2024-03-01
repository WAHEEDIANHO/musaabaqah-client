<template>
<!--    <div class="container-fluid position-relative hold">-->
<!--        <div class="guide">-->
<!--            <h3 class="mt-2">Click the button below to Generate ur Question</h3>-->
<!--            <p class=" text-center text-danger">Participant screen</p>-->
<!--            <h1 v-if="questions.length" class=" text-center text-info">You have seleceted some question</h1>-->
<!--            <button class="btn btn-success btn-lg" @click="generateQuestion">Generate</button> -->
<!--        </div>-->
<!--         -->
<!--          &lt;!&ndash;<div class="row">-->
<!--            <div class="questions col-md-3 col-sm-6 my-4" v-for="(question, i) in questions" :key="i">-->
<!--             <div class="card h-100">-->
<!--                <div class="card-header bg-primary text-white">-->
<!--                    <h5 class="card-title">Question {{i + 1}}</h5>-->
<!--                </div>-->
<!--                <div class="card-body">-->
<!--                    <p class="card-text">{{question}}</p>-->
<!--                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>-->
<!--                </div>-->
<!--            </div>-->
<!--         </div>-->
<!--         </div> &ndash;&gt;-->
<!--            -->
<!--    </div>-->
      <div v-if="loading" class="backdrop d-flex justify-content-center align-items-center">
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
      <section>
        <div class="w-100 pt-80 black-layer pb-70 opc65 position-relative">
          <div class="fixed-bg" :style="`background-image: url(${require('@/assets/images/page-title-bg.jpg')})`"></div>
          <div class="container">
            <div class="page-title-wrap text-center w-100">
              <div class="page-title-inner d-inline-block">
                <h1 class="mb-0">PARTICIPANT</h1>
                <ol class="breadcrumb mb-0">
<!--                  <li class="breadcrumb-item">SAFIU WAHEED</li>-->
<!--                  <li class="breadcrumb-item active">Modrasha</li>-->
                </ol>
              </div>
            </div><!-- Page Title Wrap -->
          </div>
        </div>
      </section>

      <section v-if="chapter_range.length > 0 && !progress">
        <div class="w-100 pt-120 pb-280 position-relative">
<!--          <img class="sec-botm-rgt-mckp img-fluid position-absolute" :src="require('@/assets/images/sec-botm-mckp.png')" alt="Sec Bottom Mockup">-->
          <div class="container">
            <div class="serv-wrap wide-sec">
              <div class="row justify-content-center flex-row-reverse mrg10">
                <div class="col-md-6 col-sm-6 col-lg-3" v-for="(el, i) in chapter_range" :key="i" @click="() => sendRange(juz_range[i])">
                  <div class="serv-box text-center pat-bg gray-layer opc8 position-relative back-blend-multiply gray-bg w-100" :style="`background-image: url(${require('@/assets/images/patternBg.jpg')})`">
                    <i class="flaticon-quran thm-clr"></i>
                    <h3 class="mb-0">Juz Range</h3>
                    <div class="d-flex justify-content-between">
                      <h1 style="font-family: surahnames" class="mb-0">{{`${el?.split("-")[1].padStart(3, "0")}`}}</h1>
                      <h1 style="font-family: surahnames" class="mb-0">{{`${el?.split("-")[0].padStart(3, "0")}`}}</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div><!-- Services Wrap -->
          </div>
        </div>
      </section>
      <section v-else>
        <div class="container-fluid">
          <div class="row" style="height: calc(100vh - 155.89px)">
            <div class="col-6 text-center d-flex flex-column justify-content-center align-items-center">
              <h1  v-if="progress">Recitation on-going</h1>
              <h1 v-else>Judge Picking category, Please wait...</h1>
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
            <div class="col-6 p-0 h-100 side-img"
                 :style="`background-image: url(${require('@/assets/images/quran_hands.jpg')})`"
            />
          </div>
        </div>
      </section>
</template>

<script>

// import axios from 'axios'
import io from 'socket.io-client'
import axios from "axios";

export default {
    name: 'ParticipantPage',

    data () {
        return {
            // chapters: this.$store.state.chapters,
            questions: [],
            count: 0,
            socket: io('https://musaabaqah.onrender.com'),
            juzz_no: null,
            chapter_range: [],
            juz_range: [],
            available_range: [1,3, 5, 10, 15, 20, 30],
            progress: false,
            loading: false

        }
    },

    computed: {
        chapters(){
            return this.$store.state.chapters
        }
    },

    methods: {
        randomNUmber: (min, max) => Math.floor(Math.random() * ((max+1) - min) + min),
        surahInRange (min, max) {
            return this.chapters.filter((chapter => chapter.pages[0] >= min && chapter.pages[1] <= max))
        },

        generateQuestion () {
             this.questions = []   
            for(let i = 0; i < 4; i++) {
                let min, max, chapter, verse, surahs

                min = 30/4 * i * 20 + 1 //u can change 30 to the number of juzz specify
                max = 30/4 * (i+1) * 20, // 4 implies the number of questio to be given to participant

                surahs = this.surahInRange(min, max)
                chapter = surahs[this.randomNUmber(0, surahs.length - 1)]
                verse = this.randomNUmber(1, chapter.verses_count) 

                this.questions.push({chapter: chapter.id, verse})
            }

            console.log(this.questions)
            this.socket.emit('questions', this.questions)
            // this.count++
        },

      async showJuzzRange(juzz_no) {
          const {data : {juzs}} = await axios.get("https://api.quran.com/api/v4/juzs");
        const total_juzz = 30
        const chapArr = (pos) => {
          // console.log(pos, Object.keys(juzs[pos]['verse_mapping']));
          // console.log()
          return Object.keys(juzs[pos]['verse_mapping'])
        }

        if(this.juzz_no === 30) {
          this.chapter_range = [`1-${chapArr(Number(juzz_no) - 1)[chapArr(Number(juzz_no) - 1).length - 1]}`];
          this.juz_range = [`1-30`]
        }
        else if(juzz_no > 15) {
          this.chapter_range = [`1-${chapArr(Number(juzz_no) - 1)[chapArr(Number(juzz_no) - 1).length - 1]}`, `${chapArr(((total_juzz - Number(juzz_no)) - 1))[0]}-${chapArr(total_juzz - 1)[(chapArr(total_juzz - 1).length) - 1]}`];
          this.juz_range = [`1-${juzz_no}`, `${(total_juzz - Number(juzz_no))}-${(total_juzz)}`]
        }
        else{
          for(let i =1; i <= total_juzz; i+=(juzz_no)) {
            this.chapter_range.push(`${chapArr(i-1)[0]}-${chapArr((i-1)+Number(juzz_no)-1)[(chapArr((i-1)+Number(juzz_no)-1).length)-1]}`)
            this.juz_range.push(`${i}-${i+Number(juzz_no)-1}`)
          }
        }
        console.log(this.juz_range)
      },

      sendRange(juzRange) {
            this.loading = true;
            const start = juzRange.split("-")[0];
            const end = juzRange.split("-")[1];

          const question = {
            start,
            end,
            questionNo: this.$route.query?.question,
            room: this.$route.query?.name
          }
          console.log(question)
          this.socket.emit('GENERATE_QUESTION', question);
      }
    },

  mounted () {
    this.$nextTick(async function() {
      const { query } = this.$route || {};
      this.socket.emit("JOIN", {room:  query?.name})
      this.socket.on('JUZ_RANGE_SELECTION', ({juz_range}) => {
        // console.log("received signal ", juz_range)
        this.showJuzzRange(juz_range)
      });
      this.socket.on('GENERATE_QUESTION', () => {
        this.progress = true
        this.loading = false
      });

      this.socket.on('DONE', () => {
            this.questions= [];
            this.count= 0;
            this.juzz_no= null;
            this.chapter_range= [];
            this.juz_range= [];
            this.progress= false;
      });


      this.socket.on("ERROR", (error)=>{
        console.log(error)
      })

    })

  }
}
</script>

<style scoped>
@font-face {
  font-family: uthmani;
  src: url("@/assets/UthmanicHafs1Ver18.woff2");
}

@font-face {
  font-family: surahnames;
  src: url("@/assets/sura_names.woff2");
}

.hold{
        height: 90vh;
    }
    .questions {
        height: 300px;
    }

    .guide{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

.side-img{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: scaleX(-1);
}
.backdrop {
  position: fixed;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>