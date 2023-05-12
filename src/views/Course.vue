<template>
  <div style="background-color: #02264c">
    <Navbar />
    <!-- <Hero /> -->

    <div
      class="text-white lg:w-3/5 w-full px-10 pt-24 pb-10 lg:px-0 max-w-[1500px] m-auto flex flex-col justify-center items-center"
    >
      <div>
        <p
          class="text-center md:text-5xl text-3xl text-white mt-10 mb-1 tracking-wider"
        >
          課程總覽
        </p>
        <p
          class="text-center md:text-3xl text-lg text-white tracking-wider pt-5"
        >
          all our Course
        </p>
        <p class="m-auto text-left leading-relaxed py-0"></p>
      </div>
    </div>

    <!-- 資料頁面 -->
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
    >
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg bg-teal-700">
        <img
          class="w-full"
          src="https://picsum.photos/seed/{0}picsum/300/300"
          alt="ski"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">基礎單板團課</div>
          <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      <!--Card 2-->
      <div class="rounded overflow-hidden shadow-lg bg-teal-700">
        <img
          class="w-full"
          src="https://picsum.photos/seed/{1}picsum/300/300"
          alt="paul"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">基礎雙版團課</div>
          <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      <!--Card 3-->
      <div class="rounded overflow-hidden shadow-lg bg-teal-700">
        <img
          class="w-full"
          src="https://picsum.photos/seed/{3}picsum/300/300"
          alt="paul"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">進階#平花團體課</div>
          <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>


      <!-- 資料頁面2 -->
      <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
    >
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg bg-teal-700">
        <img
          class="w-full"
          src="https://picsum.photos/seed/{9}picsum/300/300"
          alt="ski"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">基礎單板團課</div>
          <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      <!--Card 2-->
      <div class="rounded overflow-hidden shadow-lg bg-teal-700">
        <img
          class="w-full"
          src="https://picsum.photos/seed/{4}picsum/300/300"
          alt="paul"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">基礎雙版團課</div>
          <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>

      <!--Card 3-->
      <div class="rounded overflow-hidden shadow-lg bg-teal-700">
        <img
          class="w-full"
          src="https://picsum.photos/seed/{5}picsum/300/300"
          alt="paul"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">進階#平花團體課</div>
          <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>

   
  </div>

  <TheFooter />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import TheFooter from "../components/TheFooter.vue";
export default { components: { Navbar, Hero, TheFooter } };
</script>

<style></style>
