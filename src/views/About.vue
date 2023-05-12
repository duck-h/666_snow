<template>
  <Navbar />

  <div style="background: linear-gradient(#1d559d, #1e3a8a)">
    <div
      class="w-4/5 max-w-[1500px] m-auto py-24 flex flex-col justify-center items-center"
    >
      <div class="w-full pt-20 flex flex-col xl:flex-row">
        <div class="xl:border-r-2 border-r-0 mr-20 w-full xl:w-1/3">
          <p class="text-5xl text-[#09EBFE] text font-semibold">競賽辦法</p>
          <p class="text-white mt-1 tracking-widest">Competition method</p>
        </div>

        <div class="w-full xl:w-2/3">
          <p class="text-[#09EBFE]">___</p>
          <p class="text-white mt-1 leading-relaxed">
            <span class="font-semibold">1. 徵件對象</span><br />
            -全國各地就讀大專院校學子(含碩士班)，每隊二至五人，歡迎組隊參加。
            <br /><br />
            <span class="font-semibold">2. 徵件組別</span>
            <br />
            - 專題組: 以聯合國永續發展目標「SDGs」為題，只要符合 17
            項核心目標皆可做為專題。<br />
            - 公開組: 個人夢想、公益服務、文化交流、以及其他類型。<br /><br />

            <span class="font-semibold ">3. 報名方式</span>
            <br />
            - 請登入報名網頁填寫報名資料。<br /><br />
            
            <span class="font-semibold">4. 初審徵件日期</span>
            <br />- 2021 年 08 月
            01 日至 2021 年 09 月 30 日 中午 12 點止，逾期恕不受理。 <br /><br>
            <span class="font-semibold">5.
            獎勵方式</span>
            <br />- 總獎金新台幣 300 萬元。
            依獲選計畫內容發給核定之補助獎金。
          </p>
          <div class="flex justify-end">
            <img
              src="../assets/images/cloud.png"
              alt=""
              srcset=""
              class="w-28"
            />
          </div>
        </div>
      </div>

      <hr class="lg:w-0 w-full my-10 border-white" />

      <div class="w-full pt-20 flex flex-col xl:flex-row">
        <div class="xl:border-r-2 border-r-0 mr-20 w-full xl:w-1/3">
          <p class="text-5xl text-[#09EBFE] text font-semibold">競賽時程</p>
          <p class="text-white mt-1 tracking-widest">Competition schedule</p>
        </div>

        <div class="w-full xl:w-2/3">
          <p class="text-[#09EBFE]">___</p>
          <p class="text-white mt-1 leading-relaxed">
            1. 徵件對象 -
            全國各地就讀大專院校學子(含碩士班)，每隊二至五人，歡迎組隊參加。<br />
            2. 徵件組別<br />
            - 專題組: 以聯合國永續發展目標「SDGs」為題，只要符合 17
            項核心目標皆可做為專題。<br />
            - 公開組: 個人夢想、公益服務、文化交流、以及其他類型。<br />
            3. 報名方式 - 請登入報名網頁填寫報名資料。<br />4. 初審徵件日期 -
            2021 年 08 月 01 日至 2021 年 09 月 30 日 中午 12
            點止，逾期恕不受理。 <br />5. 獎勵方式 - 總獎金新台幣 300 萬元。
            依獲選計畫內容發給核定之補助獎金。
          </p>
          <div class="flex justify-end">
            <img
              src="../assets/images/cloud.png"
              alt=""
              srcset=""
              class="w-28"
            />
          </div>
        </div>
      </div>
      <hr class="lg:w-0 w-full my-10 border-white" />
    </div>
  </div>

  <TheFooter />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TheFooter from "../components/TheFooter.vue";
export default { components: { Navbar, TheFooter } };
</script>

<style lang="scss" scoped></style>
