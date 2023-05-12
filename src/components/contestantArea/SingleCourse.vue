<template>
  <div style="background: linear-gradient(#1d559d, #1e3a8a)">
    <div class="w-4/5 max-w-[1500px] m-auto py-24 flex flex-col justify-center items-center">

      <div class="w-full py-20 flex flex-col
        xl:flex-row"
        >
        <div class="w-full mb-10
          xl:w-1/3 xl:mb-0"
          >
          <p class="text-5xl text-[#09EBFE] text font-semibold">課程簡介</p>
          <p class="text-white mt-1">Course introduction</p>
        </div>

        <div class="w-full
          xl:w-2/3"
          >
          <p class="text-[#09EBFE]">課程介紹</p>
          <p class="text-white mt-1">{{ courseIntro }}</p>
        </div>
      </div>

    <hr class="w-full my-10 border-white">

      <div class="w-full text-white">
        <div>
          <div>
            <p class="text-[#09EBFE]">線上課程</p>
            <p>課程名稱: {{ courseID }}</p>
            <p>課程編號:</p>
          </div>

        <div class="aspect-w-16 aspect-h-9  mt-6">
          <video
            id="vid1"
            class="azuremediaplayer amp-default-skin"
            controls
            
            data-setup='{"nativeControlsForTouch": false}'
          >
            <source
              src="https://tsmcicmedia-aaea.streaming.media.azure.net/b4711a8e-3b4f-4b46-babe-c0a7f4c3cbf0/Advanced_VLSI_IC_design_contest_.ism/manifest(format=mpd-time-cmaf)"
            />
            <p class="amp-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that supports HTML5 video
            </p>
          </video>
        </div>
      </div>

        <div>
          <hr class="w-full my-10 border-white">
          <div>
            <p class="text-[#09EBFE]">Cadence lab video</p>
            <p>課程名稱: Lab for Design Import and Customizing the Innovus™ Implementation System Environment</p>
          </div>

          <div class="aspect-w-16 aspect-h-9 mt-6">
            <video
              id="vid1"
              class="azuremediaplayer amp-default-skin"
              controls
              data-setup='{"nativeControlsForTouch": false}'
            >
              <source
                src="https://tsmcicmedia-aaea.streaming.media.azure.net/b4711a8e-3b4f-4b46-babe-c0a7f4c3cbf0/Advanced_VLSI_IC_design_contest_.ism/manifest(format=mpd-time-cmaf)"
              />
              <p class="amp-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that supports HTML5 video
              </p>
            </video>
          </div>
        </div>

        <div class="mt-10 text-end">
          <router-link
            class="w-[160px] rounded-full px-4 py-1 text-white border text-center font-semibold text-lg mr-6 mt-6
            hover:bg-white hover:text-[#184D9B]"
            to="/contestant_area/learning_platform"
            >&lt; 回到課程首頁</router-link>
          <router-link
            class="w-[160px] rounded-full px-4 py-1 text-white border text-center font-semibold text-lg mt-16
            hover:bg-white hover:text-[#184D9B]"
            :to="`/contestant_area/quiz/${courseID}`"
            >我要測驗 &gt;</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const courseIntro = ref('首屆「前瞻 VLSI IC 大賽」經過為期4個月的賽程，兩階段的競賽，由元智大學組成的參賽隊伍自決賽中脫穎而出，榮獲首獎，獲頒新台幣20萬元獎金。台積公司為鼓勵在台灣的年輕學子進入先進製程佈局領域，首度舉辦全國性的「前瞻佈局」校園競賽，獲得學界極大的迴響，吸引大量的年輕學子投身半導體產業')
  const courseID = computed(() => useRoute().params.id)

</script>
