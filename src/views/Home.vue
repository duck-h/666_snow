<script setup>
import Navbar from "@/components/Navbar.vue";
import TheFooter from "../components/TheFooter.vue";
//import Nav2 from '../components/contestantArea/Nav2.vue'
</script>

<template>
  <Navbar />
  <header>
    <div class="bg-black relative overflow-hidden h-screen">
      <img
        src="@/assets/images/bg_clean.png"
        class="absolute w-full h-full object-cover opacity-50"
      />
      <div
        class="lg:mt-[40vh] mt-[32vh] container mx-auto relative z-10 flex items-center py-20 my-24 pl-5"
      >
        <div class="absolute flex flex-col z-10">
          <div class="flex flex-col w-full md:px-14 px-0">
            <p class="text-3xl text-white font-mono">
              Carpe Diem, <br />Enjoy every moment of your life :)
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  <TheFooter/>
</template>

<style></style>
