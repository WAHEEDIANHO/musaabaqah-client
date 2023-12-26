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
      <section>
        <div class="w-100 pt-80 black-layer pb-70 opc65 position-relative">
          <div class="fixed-bg" :style="`background-image: url(require('@/assets/images/page-title-bg.jpg'))`"></div>
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
      <section v-if="chapter_range.length === 0">
        <div class="w-100 pt-120 pb-280 position-relative">
          <div class="px-4 w-75 mx-auto d-flex flex-column align-items-center">
            <label class="display-4" for="juz-memorize">Juz Memorized?</label>
            <select class="form-control" id="juz-memorize" type="number" v-model="juzz_no">
              <option v-for="el in available_range" :key="el" :value="el">{{el}}</option>
            </select>
            <button @click="showJuzzRange" class="btn btn-success btn-lg w-50 mt-20">Next</button>
          </div>
        </div>
      </section>
      <section v-else>
    <div class="w-100 pt-120 pb-280 position-relative">
      <img class="sec-botm-rgt-mckp img-fluid position-absolute" :src="require('@/assets/images/sec-botm-mckp.png')" alt="Sec Bottom Mockup">
      <div class="container">
        <div class="serv-wrap wide-sec">
          <div class="row justify-content-center flex-row-reverse mrg10">
            <div class=" col-md-6 col-sm-6 col-lg-3" v-for="(el, i) in chapter_range" :key="i" @click="() => sendRange(juz_range[i])">
                <div class="serv-box text-center pat-bg gray-layer opc8 position-relative back-blend-multiply gray-bg w-100" :style="`background-image: url(${require('@/assets/images/pattern-bg.jpg')})`">
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
            socket: io('localhost:9090'),
            juzz_no: null,
            chapter_range: [],
            juz_range: [],
            available_range: [1,3, 5, 10, 15, 20, 30],
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

      async showJuzzRange() {
          const {data : {juzs}} = await axios.get("https://api.quran.com/api/v4/juzs");
        const total_juzz = 30
        const chapArr = (pos) => {
          // console.log(pos, Object.keys(juzs[pos]['verse_mapping']));
          // console.log()
          return Object.keys(juzs[pos]['verse_mapping'])
        }

        if(this.juzz_no === 30) {
          this.chapter_range = [`1-${chapArr(Number(this.juzz_no) - 1)[chapArr(Number(this.juzz_no) - 1).length - 1]}`];
          this.juz_range = [`1-30`]
        }
        else if(this.juzz_no > 15) {
          this.chapter_range = [`1-${chapArr(Number(this.juzz_no) - 1)[chapArr(Number(this.juzz_no) - 1).length - 1]}`, `${chapArr(((total_juzz - Number(this.juzz_no)) - 1))[0]}-${chapArr(total_juzz - 1)[(chapArr(total_juzz - 1).length) - 1]}`];
          this.juz_range = [`1-${this.juzz_no}`, `${(total_juzz - Number(this.juzz_no))}-${(total_juzz)}`]
        }
        else{
          for(let i =1; i <= total_juzz; i+=(this.juzz_no)) {
            this.chapter_range.push(`${chapArr(i-1)[0]}-${chapArr((i-1)+Number(this.juzz_no)-1)[(chapArr((i-1)+Number(this.juzz_no)-1).length)-1]}`)
            this.juz_range.push(`${i}-${i+Number(this.juzz_no)-1}`)
          }
        }
        console.log(this.juz_range)
      },

      sendRange(juzRange) {
            const start = juzRange.split("-")[0];
            const end = juzRange.split("-")[1];

          const question = {
            start,
            end,
            questionNo: 5,
            room: "room2"
          }
          console.log(question)
          this.socket.emit('GENERATE_QUESTION', question)
      }
    },

    mounted() {
       this.$nextTick(async () => {
           this.$store.dispatch('getChapters')

        //   const response = await axios.get('https://api.quran.com/api/v4/chapters?language=en') 
        //   this.chapters = response.data.chapters
        //   console.log(this.chapters)
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
</style>