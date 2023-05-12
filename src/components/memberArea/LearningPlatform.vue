<template>
  <div style="background: linear-gradient(#1d559d, #1e3a8a)">
    <div class="w-4/5 max-w-[1500px] m-auto py-24 flex flex-col justify-center items-center">

      <div class="w-full py-20 flex flex-col
        xl:flex-row"
        >
        <div class="w-full mb-10 
          xl:w-1/3 xl:mb-0"
          >
          <p class="text-5xl text-[#09EBFE] text font-semibold">學習路徑</p>
          <p class="text-white mt-1">Learning path</p>
        </div>

        <div class="w-full
          xl:w-2/3"
          >
          <p class="text-[#09EBFE]">學習路徑介紹與使用提醒</p>
          <p class="text-white mt-1">
            首屆「前瞻 VLSI IC 大賽」經過為期4個月的賽程，兩階段的競賽，由元智大學組成的參賽隊伍自決賽中脫穎而出，榮獲首獎，獲頒新台幣20萬元獎金。
            台積公司為鼓勵在台灣的年輕學子進入先進製程佈局領域，首度舉辦全國性的「前瞻佈局」校園競賽，獲得學界極大的迴響，吸引大量的年輕學子投身半導體產業
          </p>
        </div>
      </div>

  <!-- mobile -->
    <div class="w-full flex flex-col
      xl:hidden"
      >
      <div class="flex">
        <p class="text-white text-lg w-1/2
          md:w-1/4"
          >tsmc 線上課程</p>
        <p class="text-white text-lg w-1/2
          md:w-3/4 md:pl-6"
          >cdns 線上課程</p>
      </div>

      <div class="flex">
        <div class="w-1/2 pr-1
          md:w-1/4 md:pr-6"
          >
          <template
            v-for="tsmc in tsmc_courses"
            :key="tsmc.id"
            >
            <div class="relative
              hover:scale-95 transition ease-in">
              <router-link
                class="h-20 flex grow mt-8 justify-start rounded-lg shadow-[8px_8px_4px_rgba(6,22,62,0.25)] bg-gray-200
                sm:min-w-[90px] overflow-hidden w-full"
                :to="`/contestant_area/course/${tsmc.id}`"
                >
                <div class="h-full bg-[#FFCE85] left-0"
                  :style="{ width: tsmc.progress + '%' }"
                  ></div>
                  <div class="h-full flex justify-center items-center pr-4 text-xs absolute top-0 left-2">
                  <!-- <p>課程編號：</p> -->
                  <p>{{ tsmc.name }}</p>
                </div>
              </router-link>

              <router-link
                class="w-10 h-10 flex justify-center items-center text-center break-words bg-[#0CC76D] text-white rounded-full text-xs absolute top-[-5px] right-0 translate-y-[-50%]
                md:top-0 md:right-[-5%]
                hover:translate-y-[-55%] transition ease-in"
                :to="`/contestant_area/quiz/${tsmc.id}`"
                v-if="tsmc.quizStatus === 1"
                >測驗通過</router-link>
              <router-link class="w-10 h-10 flex justify-center items-center text-center break-words bg-[#FF4848] text-white rounded-full text-xs absolute top-[-5px] right-0 translate-y-[-50%] 
                md:top-0 md:right-[-5%]
                hover:translate-y-[-55%] transition ease-in"
                :to="`/contestant_area/quiz/${tsmc.id}`"
                v-else-if="tsmc.quizStatus === 2"
                >測驗未通過</router-link>
              <router-link class="w-10 h-10 flex justify-center items-center text-center break-words bg-[#FF4848] text-white rounded-full text-xs absolute top-[-5px] right-0 translate-y-[-50%] 
                md:top-0 md:right-[-5%]
                hover:translate-y-[-55%] transition ease-in"
                :to="`/contestant_area/quiz/${tsmc.id}`"
                v-else
                >可測驗</router-link>
            </div>
          </template>
        </div>

        <div class="w-[1px] h-auto bg-white relative hidden
          md:block"
          >
          <div class="w-[6px] h-[200px] bg-[#09EBFE] rounded absolute left-0 top-[50px] translate-x-[-50%]"></div>
        </div>

        <!-- cdns -->
        <div class="w-1/2 pl-2
          md:w-3/4 md:pl-6"
          >
          <template
            v-for="cdns in cdns_courses"
            :key="cdns.id"
            >
            <div class="scroll h-20 flex overflow-auto mt-8">
              <template
                v-for="(cdn, k) in cdns"
                :key="cdn.id"
                >
              
                <router-link
                  class="min-w-[90px] h-full flex grow pl-2 justify-start rounded-lg shadow-[8px_8px_4px_rgba(6,22,62,0.25)] overflow-hidden bg-gray-200
                  sm:pl-6 relative
                  hover:scale-95 transition ease-in"
                  :class="{ 'mr-2': k + 1 !== cdns.length }"
                  :to="`/contestant_area/course/${cdn.id}`"
                  >
                  <div class="h-full bg-[#7CFFA1] absolute left-0"
                    :style="{ width: cdn.progress + '%' }"
                    ></div>
                  <div class="flex flex-col text-xs justify-center z-50">
                    <!-- <p>課程編號：{{ }}</p> -->
                    <p>{{ cdn.name }}</p>
                  </div>
                  <!-- <div class="quiz_item"></div> -->
                </router-link>
              </template>
            </div>
          </template>

        </div>
      </div>
    </div>


    <div class="hidden w-[1100px] my-10 relative
      xl:block xl:h-[1200px]
      2xl:h-[1400px] 2xl:w-[1350px]"
      >
      <!-- path -->
      <template
        v-for="path in paths"
        :key="path.name"
        >
        <div :class="path.class"></div>
      </template> 

      <!-- tsmc -->
      <template
        v-for="tsmc in tsmc_courses"
        :key="tsmc.id"
        >
        <div
          class="hover:scale-105 transition ease-in"
          :class="[tsmc.tabletClass]"
          >
          <router-link
            class="overflow-hidden rounded-full w-full"
            :to="`/contestant_area/course/${tsmc.id}`"
            >
            <div class="h-full bg-[#FFCE85] left-0"
              :style="{ width: tsmc.progress + '%' }"
              ></div>
            <div class="video_item">
              <p>課程編號：{{ tsmc.id }}</p>
              <p>{{ tsmc.name }}</p>
            </div>
          </router-link>
          <router-link
            class="w-16 h-16 flex justify-center items-center text-center break-words bg-[#0CC76D] text-white rounded-full text-sm absolute right-0 translate-y-[-50%]
            hover:translate-y-[-55%] transition ease-in-out"
            :to="`/contestant_area/quiz/${tsmc.id}`"
            v-if="tsmc.quizStatus === 1"
            >測驗通過</router-link>
          <router-link class="bg-[#FF4848] text-white w-16 h-16 absolute right-0 translate-y-[-50%] rounded-full text-sm flex justify-center items-center text-center break-words
            hover:translate-y-[-55%] transition ease-in-out"
            :to="`/contestant_area/quiz/${tsmc.id}`"
            v-else-if="tsmc.quizStatus === 2"
            >測驗未通過</router-link>
          <router-link class="bg-[#FF4848] text-white w-16 h-16 absolute right-0 translate-y-[-50%] rounded-full text-sm flex justify-center items-center text-center break-words
            hover:translate-y-[-55%] transition ease-in-out"
            :to="`/contestant_area/quiz/${tsmc.id}`"
            v-else
            >可測驗</router-link>
        </div>
          

      </template>

      <!-- cdns course -->
      <template
        v-for="cdns in allCdnsCourses"
        :key="cdns.id"
        >
        <router-link
          class="hover:scale-105 transition ease-in"
          :class="[cdns.tabletClass]"
          :to="`/contestant_area/course/${cdns.id}`"
          >
          <div class="h-full bg-[#7CFFA1] absolute left-0"
            :style="{ width: cdns.progress + '%' }"
            ></div>
          <div class="video_item">
            <p>課程編號：{{ cdns.id }}</p>
            <p>{{ cdns.name }}</p>
          </div>
          <!-- <div class="quiz_item"></div> -->
        </router-link>
      </template>
    </div>

    <hr class="w-full my-16 border-black">

    <p class="text-[#09EBFE] text-2xl font-semibold self-start">Cadence Lab video List</p>
    <div class="w-full flex flex-wrap justify-start mt-5 mb-10">

      <template
        v-for="lab in cdns_labs"
        :key="lab.id"
        >
        <router-link
          class="cdns_lab hover:scale-105 transition ease-in"
          :to="`/contestant_area/course/${lab.id}`"
          >
          <div
            class="h-full bg-[#00FFFF] absolute left-0"
            :style="{ width: lab.progress + '%' }"
            ></div>
          <div class="video_item">
            <p>課程編號：{{ lab.id }}</p>
            <p>{{ lab.name }}</p>
          </div>
          <div class="quiz_item"></div>
        </router-link>
      </template>
    </div>

  </div>
  
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const paths = ref([
    {
      name: 'path_1',
      class: `absolute w-[275px] top-[100px] border-white/[.1] border-[25px] rounded-bl-full rounded-tl-full
      2xl:w-[325px] 2xl:top-[120px]`
    },
    {
      name: 'path_2',
      class: `absolute w-[825px] top-[100px] h-[250px] left-[275px] border-white/[.25] border-t-[50px] border-r-[50px] rounded-tr-[80px]
      2xl:w-[1025px] 2xl:top-[120px] 2xl:h-[300px] 2xl:left-[325px]`
    },
    {
      name: 'path_3',
      class: `absolute w-[800px] top-[350px] h-[250px] left-[300px] border-white/[.4] border-r-[50px] border-b-[50px] rounded-br-[80px]
      2xl:w-[1025px] 2xl:top-[420px]  2xl:h-[300px] 2xl:left-[325px]`
    },
    {
      name: 'path_4',
      class: `absolute w-[300px] top-[550px] h-[300px] border-white/[.4] border-t-[50px] border-l-[50px] rounded-tl-[80px]
      2xl:w-[325px] 2xl:top-[670px]`
    },
    {
      name: 'path_5',
      class: `absolute w-[255px] top-[850px] h-[250px] border-white/[.55] border-l-[50px] border-b-[50px] rounded-bl-[80px]
      2xl:w-[310px] 2xl:top-[970px] 2xl:h-[300px]`
    },
    {
      name: 'path_6',
      class: `absolute w-[210px] top-[1050px] left-[255px] border-white/[.7] border-l-[50px] border-b-[50px]
      2xl:w-[260px] 2xl:top-[1220px] 2xl:left-[310px]`
    },
    {
      name: 'path_7',
      class: `absolute w-[400px] top-[1050px] left-[465px] border-white/[.85] border-l-[50px] border-b-[50px]
      2xl:w-[520px] 2xl:top-[1220px] 2xl:left-[570px]`
    },
    {
      name: 'path_8',
      class: `absolute w-[235px] top-[1050px] left-[865px] border-white border-l-[50px] border-b-[50px] rounded-tr-[80px] rounded-br-[80px]
      2xl:w-[260px] 2xl:top-[1220px] 2xl:left-[1090px]`
    },
  ])
  const tsmc_courses = ref([
    {
      id: 'T01',
      name: 'Chapter 1. APR introduction',
      progress: 2,
      tabletClass: `tsmc_video w-[180px] 2xl:w-[210px] left-[60px] 2xl:left-[75px] bg-gray-200`,
      quizStatus: 1
    },
    {
      id: 'T02',
      name: 'Chapter 2. floorplan+powerplan',
      progress: 100,
      tabletClass: `tsmc_video w-[765px] 2xl:w-[970px] left-[275px] 2xl:left-[345px] bg-gray-200`,
      quizStatus: 3
    },
    {
      id: 'T03',
      name: 'Chapter 3. placement',
      progress: 50,
      tabletClass: `tsmc_video w-[980px] 2xl:w-[1220px] top-[450px] 2xl:top-[550px] left-[60px] 2xl:left-[65px] bg-gray-200`,
      quizStatus: 1
    },
    {
      id: 'T04',
      name: 'Chapter 4. cts',
      progress: 50,
      tabletClass: `tsmc_video w-[180px] 2xl:w-[210px] top-[950px] 2xl:top-[1100px] left-[60px] 2xl:left-[65px] bg-gray-200`,
      quizStatus: 3
    },
    {
      id: 'T05',
      name: 'Chapter 5. routing',
      progress: 20,
      tabletClass: `tsmc_video w-[180px] 2xl:w-[210px] top-[950px] 2xl:top-[1100px] left-[268px] 2xl:left-[335px] bg-gray-200`,
      quizStatus: 2
    },
    {
      id: 'T06',
      name: 'Chapter 6. chip finish',
      progress: 50,
      tabletClass: `tsmc_video w-[378px] 2xl:w-[430px] top-[950px] 2xl:top-[1100px] left-[476px] 2xl:left-[605px] bg-gray-200`,
      quizStatus: 2
    },
    {
      id: 'T07',
      name: 'Chapter 7. 手把手教你跑一遍',
      progress: 90,
      tabletClass: `tsmc_video w-[180px] 2xl:w-[210px] top-[950px] 2xl:top-[1100px] left-[882px] 2xl:left-[1095px] bg-gray-200`,
      quizStatus: 1
    }
  ])
  const cdns_courses = ref(
    {
      toModule1: [
        {
          id: 'C01',
          name: 'Module 1: Innovus™ Implementation System Overview',
          progress: 100,
          tabletClass: `cdns_video w-[180px] top-[170px] left-[60px] bg-gray-200
          2xl:w-[210px] 2xl:top-[190px] 2xl:left-[75px]`
        },
      ],
      toModule2: [
        {
          id: 'C02',
          name: 'Module 2 :Design Import and Customizing the Innovus™ Implementation System Environment',
          progress: 100,
          tabletClass: `cdns_video w-[180px] top-[170px] left-[275px] bg-gray-200
          2xl:w-[210px] 2xl:top-[190px] 2xl:left-[345px]`
        },
        {
          id: 'C03',
          name: 'Module 3:Floor Planning the Design Part 1',
          progress: 50,
          tabletClass: `cdns_video w-[180px] top-[170px] left-[470px] bg-gray-200
          2xl:w-[210px] 2xl:top-[190px] 2xl:left-[588px]`
        },
        {
          id: 'C04',
          name: 'Module 3:Floor Planning the Design Part 2',
          progress: 50,
          tabletClass: `cdns_video w-[180px] top-[170px] left-[665px] bg-gray-200
          2xl:w-[210px] 2xl:top-[190px] 2xl:left-[831px]`
        },
        {
          id: 'C05',
          name: 'Module 4: Planning Power',
          progress: 20,
          tabletClass: `cdns_video w-[180px] top-[170px] left-[860px] bg-gray-200
          2xl:w-[210px] 2xl:top-[190px] 2xl:left-[1074px]` 
        },
      ],
      toModule3: [
      {
        id: 'C06',
        name: 'Module 5:Running Placement Optimization',
        progress: 50,
        tabletClass: `cdns_video w-[180px] top-[620px] left-[860px] bg-gray-200
        2xl:w-[210px] 2xl:top-[740px] 2xl:left-[1065px]`
      },
      {
        id: 'C07',
        name: 'Module 6:Analyzing Route Feasibility with Early Global Router',
        progress: 90,
        tabletClass: `cdns_video w-[180px] top-[620px] left-[660px] bg-gray-200
        2xl:w-[210px] 2xl:top-[740px] 2xl:left-[815px]`
      },
      {
        id: 'C08',
        name: 'Module 7: Multi-Mode Multi-Corner Analysis',
        progress: 77,
        tabletClass: `cdns_video w-[180px] top-[620px] left-[460px] bg-gray-200
        2xl:w-[210px] 2xl:top-[740px] 2xl:left-[565px]`
      },
      {
        id: 'C09',
        name: 'Module 8 :Extracting Parasitics and Running Timing Analysis',
        progress: 0,
        tabletClass: `cdns_video w-[180px] top-[620px] left-[260px] bg-gray-200
        2xl:w-[210px] 2xl:top-[740px] 2xl:left-[315px]`
      },
      {
        id: 'C10',
        name: 'Module 9:Power, Performance and Area Optimization',
        progress: 56,
        tabletClass: `cdns_video w-[180px] top-[620px] left-[60px]  bg-gray-200
        2xl:w-[210px] 2xl:top-[740px] 2xl:left-[65px]`
      },
      ],
      toModule4: [
        {
          id: 'C11',
          name: 'Module 10:Implementing the Clock Tree',
          progress: 90,
          tabletClass: `cdns_video w-[180px] top-[1120px] left-[60px] bg-gray-200
          2xl:w-[210px] 2xl:top-[1290px] 2xl:left-[65px]`
        },
      ],
      toModule5: [
        {
          id: 'C12',
          name: 'Module 11: Detail Routing for Signal Integrity, Timing, Power and Design for Yield',
          progress: 78,
          tabletClass: `cdns_video w-[180px] top-[1120px] left-[268px] bg-gray-200
          2xl:w-[210px] 2xl:top-[1290px] 2xl:left-[335px]`
        },
      ],
      toModule6: [
        {
          id: 'C13',
          name: 'Module 12-1: Verification',
          progress: 90,
          tabletClass: `cdns_video w-[180px] top-[1120px] left-[476px] bg-gray-200
          2xl:w-[210px] 2xl:top-[1290px] 2xl:left-[605px]`
        },
        {
          id: 'C14',
          name: 'Module 12-2 :Writing Out a Design',
          progress: 55,
          tabletClass: `cdns_video w-[180px] top-[1120px] left-[668px] bg-gray-200
          2xl:w-[210px] 2xl:top-[1290px] 2xl:left-[825px]`
        }
      ]
    })
  const cdns_labs = ref([
    {
      id: 'Module 2',
      name: 'Lab for Design Import and Customizing the Innovus™ Implementation System Environment',
      progress: 90,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 3',
      name: 'Lab for Floor Planning the Design',
      progress: 10,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 4',
      name: 'Lab for Planning Power',
      progress: 1,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 5 & 6',
      name: 'Lab for Running Placement Optimization & Early Global Router',
      progress: 10,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 8',
      name: 'Lab for Extracting Parasitics and Running Timing Analysis',
      progress: 20,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 10',
      name: 'Lab for Implementing the Clock Tree',
      progress: 30,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 11',
      name: 'Lab for Detail Routing for Signal Integrity, Timing, Power and Design for Yield ',
      progress: 40,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
    {
      id: 'Module 12',
      name: 'Lab for Verification',
      progress: 50,
      tabletClass: `cdns_video w-[210px] top-[190px] left-[75px] bg-gray-200`
    },
  ])

  const allCdnsCourses = computed(() => {
    let arr = Object.values(cdns_courses.value)
    let resultCourse = []
    arr.forEach(e => {
      for (let i = 0; i < e.length; i++) resultCourse.push(e[i])
    })
    return resultCourse
  })

</script>

<style lang="scss" scoped>
  .tsmc_video {
    @apply h-20 flex justify-start rounded-full shadow-[8px_8px_4px_rgba(6,22,62,0.25)] absolute
      2xl:h-[100px];
    .video_item {
      @apply flex flex-col text-xs justify-center z-50 absolute top-0 translate-y-[50%] left-6;
    }
  }

  .cdns_video {
    @apply absolute h-20 flex pl-6 justify-start rounded-full shadow-[8px_8px_4px_rgba(6,22,62,0.25)] overflow-hidden
      2xl:h-[100px];
    .video_item {
      @apply  flex flex-col text-xs justify-center z-50;
    } 
  }

  .cdns_lab {
    @apply w-[250px] h-[100px] flex px-6 justify-start rounded-xl shadow-[8px_8px_4px_rgba(6,22,62,0.25)] mr-6 mb-6 bg-gray-200 overflow-hidden relative
      2xl:w-[300px];

    .video_item {
      @apply flex flex-col text-xs justify-center z-50;
    }
  }

  .scroll {
    &::-webkit-scrollbar {
      @apply h-[7px];
    }
    & ::-webkit-scrollbar-button {
      @apply bg-transparent rounded;
    }
    &::-webkit-scrollbar-track-piece {
      @apply bg-transparent;
    }
    &::-webkit-scrollbar-thumb {
      @apply rounded;
      background-color: rgba(0, 0, 0, 0.4);
      border: 1px solid slategrey;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
  }
</style>