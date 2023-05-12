<template>
    <div
      style="background: linear-gradient(#1d559d, #1e3a8a)"
      class="relative overflow-hidden"
      >
      <!-- Login hero -->
      <div
        class="container mx-auto relative z-10 flex items-center py-20 my-24 "
        style="margin-top: 33vh"
      >
        <div class="absolute flex flex-col z-10 pointer-events-none">
          <div class="flex flex-col w-full md:px-28 px-0">
            <img
              src="@/assets/images/LoginBG.png"
              alt="text"
              srcset=""
              />
          </div>
        </div>
      </div>
      <!-- Login hero -->

      <div class="w-4/5 m-auto pb-24
        lg:w-3/5"
        >
        <div class="w-full flex flex-col">
          <div class="text-left">
            <p class="text-[#09EBFE]">與台積電 IC 大賽活動專案小組聯絡</p>
            <p class="text-white">歡迎您使用技術支援服務，取得您所需的協助。請填寫以下表單，聯絡窗口將於 XX 小時內與您聯絡。</p>
          </div>
          <hr class="bg-white my-6">
          <div class="flex flex-col">
            <input
              type="text"
              class="input_focus my-3"
              placeholder="姓名:"
              >
            <input
              type="text"
              class="input_focus my-3"
              placeholder="學校信箱: "
              >
            <input
              type="text"
              class="input_focus my-3"
              placeholder="電話:"
              >
            <textarea
              class="input_focus my-3"
              id=""
              name=""
              cols="30"
              rows="10"
              placeholder="問題描述:"
              ></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn_hover">送出</button>
            <button class="btn btn_hover">清除</button>
          </div>
        </div>
      </div>
    </div>
    
</template>

<style lang="scss" scoped>
  input {
    @apply bg-white bg-opacity-20 h-10 text-white px-4 transition ease-in rounded;
  }
  .input_focus {
    @apply focus:bg-opacity-50 focus:outline-none;
  }
  textarea {
    @apply bg-white bg-opacity-20 text-white px-4 pt-2 rounded;
  }
  ::placeholder {
    @apply text-white;
  }
  .btn {
    @apply text-xl font-semibold border border-white py-1 px-4 text-white mt-10 ml-4 w-40 rounded;
  }
  .btn_hover {
    @apply hover:bg-white hover:text-[#184D9B];
  }

</style>