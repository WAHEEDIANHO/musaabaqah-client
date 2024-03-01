<script>
export default {
  name: "TimeCounter",
  data() {
    return {
      percent: 100,
    }
  },
  props: {
    maxTime: Number,
  },
  mounted() {
    this.$nextTick(() => {
        this.timerCountDown(this.maxTime);
      });
  },
  methods: {
    percentageToDegrees(percentage) {
      return percentage / 100 * 360
    },
    timerCountDown(timeGiven) { // in minute

      let time = timeGiven * 60;
      let minute, second, cent;

  const interval =    setInterval(() =>{
       if(time >= 0) {
           minute = Math.floor(time/60);
           second = time%60;
           cent = Math.floor((time/(timeGiven * 60))*100);
           this.percent = cent;
           //console.log(minute.toString().padStart(2, "0"), ":", second.toString().padStart(2, "0"), cent);
           time--;

           //sync data with UI
         document.querySelector(".progress").setAttribute('data-value', cent)
          let left = document.querySelector('.progress-left .progress-bar');
          let right = document.querySelector('.progress-right .progress-bar');

           if (cent > 0) {
             if (cent <= 50) {
               right.style.transform = 'rotate(' + this.percentageToDegrees(cent) + 'deg)';
             } else {
               //console.log(right.style)
               right.style.transform = 'rotate(180deg)'   //('transform', 'rotate(180deg)')
               left.style.transform =  'rotate(' + this.percentageToDegrees(cent - 50) + 'deg)'
             }
           }

           let timeContainer = document.querySelector(".time");
           timeContainer.querySelector(".minute").textContent = minute.toString().padStart(2, "0");
           timeContainer.querySelector(".second").textContent = second.toString().padStart(2, "0");

       } else clearInterval(interval);
      }, 1000);
    }
  }
}
</script>

<template>
  <div class="container py-5">
      <div class="col-2 mb-3 position-fixed bottom-0">
        <div class="bg-white rounded-lg p-5 shadow">
          <div class="progress mx-auto" :data-value='percent'>
          <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
          </span>
            <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
          </span>
            <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
              <div class="h3 font-weight-bold time"><span class="minute">00</span>:<span class="second">00</span></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.progress {
  width: 100px;
  height: 100px;
  background: none;
  position: relative;
}

.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid #eee;
  position: absolute;
  top: 0;
  left: 0;
}

.progress>span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 6px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  transform-origin: center left;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  transform-origin: center right;
}

.progress .progress-value {
  position: absolute;
  top: 0;
  left: 0;
}


body {

  background: linear-gradient(to right, #a8ff78, #78ffd6);
  min-height: 100vh;
}

.rounded-lg {
  border-radius: 1rem;
}

.text-gray {
  color: #aaa;
}

div.h4 {
  line-height: 1rem;
}

h1{
  color : black;
}
.position-fixed {
  bottom: 0;
  right: 0;
  z-index: 100;
}
</style>