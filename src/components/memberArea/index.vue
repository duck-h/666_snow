<template>
  <div
    style="background: linear-gradient(#1d559d, #1e3a8a)"
    class="w-full h-screen"
    >
    <div class="w-4/5 flex flex-col justify-start m-auto pt-24
      md:w-2/5"
      >
      <div class="flex flex-col
        lg:flex-row"
        >
        <div class="mr-6
          lg:mr-10
          xl:mr-24"
          >
          <img class="w-32 rounded-full mb-5"  src="https://tecdn.b-cdn.net/img/new/avatars/8.jpg" alt="member" />
          <p class="w-full text-white text-3xl font-semibold tracking-[1rem]">滑小雪</p>
          <p class="text-[#09EBFE] text-xl mt-4">snow Q</p>
        </div>

        <div class="text-white">
          <div>
            <p class="mt-2">性別: {{ registerData.gender }}</p>
            <p class="mt-2">生日: {{ registerData.birth }}</p>
            <p class="mt-2">手機: {{ registerData.phone }}</p>
            <p class="mt-2">信箱: {{ registerData.mail }}</p>
          </div>
          <div class="mt-10">
            <p class="mt-2">經歷</p>
            <p class="mt-2">技能: {{ registerData.skill.name }}</p>
            
          </div>
        </div>
      </div>

      <!-- <div class="w-1/2 flex flex-col justify-end m-auto mt-20
        lg:w-full lg:flex-row"
        >
        <router-link 
          class="b_btn btn_hover mt-4"
          to="/contestant_area/learning_platform"
          >進入學習平台</router-link>
        <button class="b_btn btn_hover mt-4">VDE雲端設境環境</button>
        <router-link
          class="b_btn btn_hover mt-4"
          to="/contestant_area/support"
          >技術支援</router-link>
      </div> -->
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const registerData = ref({
    gender: '不透露',
    birth: '1994/04/05',
    phone: '0932-053-504',
    mail: 'duck666@gmail.com',
    skill: {
      name: '單板',
    }
  })

</script>

<style lang="scss" scoped>
  .b_btn {
    @apply text-base font-semibold border border-white text-white py-3 px-4 ml-4 text-center
      xl:text-xl xl:px-6;
  }
  .btn_hover {
    @apply hover:bg-white hover:text-[#184D9B];
  }

</style>
