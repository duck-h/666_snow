<template>
  <div style="background: linear-gradient(#1d559d, #1e3a8a)">
    <Navbar />

    <div class="relative overflow-hidden">
      <div
        class="container mx-auto relative flex items-center md:py-18 py-8 mt-24"
        style="margin-top: 30vh"
      >
        <div class="absolute flex flex-col">
          <div class="flex flex-col w-full lg:px-52 px-0">
            
          </div>
        </div>
      </div>

      <session class="container mx-auto px-4">
        <div class="flex content-center items-center justify-center">
          <div class="lg:w-1/3 w-5/6 lg:p-0 px-4">
            <div
              class="text-white md:text-3xl text-2xl text-center mb-5 tracking-widest"
            >
              <h1>報名專區</h1>
            </div>
          </div>
        </div>
      </session>

      <div class="w-4/5 lg:w-3/5 m-auto">
        <div class="w-full flex flex-col">
          <div class="text-left">
            <p class="text-[#09EBFE] pb-3 lg:text-xl text-lg">報名提醒</p>
            <p class="text-white">
              首屆「前瞻 VLSI IC
              大賽」經過為期4個月的賽程，兩階段的競賽，由元智大學組成的參賽隊伍自決賽中脫穎而出，榮獲首獎，獲頒新台幣20萬元獎金。台積公司為鼓勵在台灣的年輕學子進入先進製程佈局領域，首度舉辦全國性的「前瞻佈局」校園競賽，獲得學界極大的迴響，吸引大量的年輕學子投身半導體產業，未來IC創新的下一世代工程師及學者紮實的實務經驗。
            </p>
          </div>
          <hr class="bg-white my-6" />

          <div class="flex items-center justify-center">
            <span class="lg:text-xl text-lg text-white text-center">
              ＊ 以下報名資料送出後皆不可修改，請謹慎填寫 ＊<br />
              報名期間如有特殊需求請主動來信聯繫專案小組
            </span>
          </div>

          <section class="mt-10">
            <div>
              <div class="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2">
                <div class="w-1/2 md:pr-5 pr-2">
                  <p class="text-[#09EBFE] tracking-widest mb-1 lg:text-xl text-lg">隊伍名稱</p>
                  <input
                    class="input_focus mt-3 mb-10 w-full rounded-sm"
                    type="text"
                    placeholder=""
                  />
                  <p class="text-[#09EBFE] tracking-widest my-1 lg:text-xl text-lg">
                    隊長（主要聯絡人）
                  </p>
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 姓名 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 性別 : "
                  />

                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 生日 :  報名當下須年滿20歲 "
                    onfocus="(this.type='date')"
                    onblur="if(!this.value){this.type='text'}"
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 手機 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 學校信箱 : .edu "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="備用信箱"
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 學校 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 系所 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 年級 : "
                  />
                  <p class="text-white mt-2">
                    如以上表格中無符合的學校系級，請至下方欄位填寫
                  </p>
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="其他學校與系級 "
                  />
                </div>
                <div class="w-1/2 md:pl-5 pl-2">
                  <p class="text-[#09EBFE] tracking-widest mb-1 lg:text-xl text-lg">
                    指導老師（選填）
                  </p>
                  <div class="flex w-full items-center">
                    <input
                      class="input_focus mt-3 mb-10 w-full rounded-sm"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <p class="text-[#09EBFE] tracking-widest my-1 lg:text-xl text-lg">隊員</p>
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 姓名 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 性別 : "
                  />

                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    onfocus="(this.type='date')"
                    onblur="if(!this.value){this.type='text'}"
                    placeholder="＊ 生日 :  報名當下須年滿20歲 "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 手機 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 學校信箱 : .edu "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="備用信箱"
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 學校 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 系所 : "
                  />
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="＊ 年級 : "
                  />
                  <p class="text-white mt-2">
                    如以上表格中無符合的學校系級，請至下方欄位填寫
                  </p>
                  <input
                    class="input_focus my-2 w-full rounded-sm"
                    type="text"
                    placeholder="其他學校與系級 "
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="form-checkbox border-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
          />
          <span class="ml-2 text-sm font-semibold text-white">
            台積電『前瞻佈局』全國大賽參賽者
            <a href="#" class="text-cyan-300"> 保密聲明暨切結書 </a>
          </span>
        </label>
      </div>
      <div class="flex justify-center">
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="form-checkbox border-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
          />
          <span class="ml-2 text-sm font-semibold text-white">
            台積電『前瞻佈局』全國大賽
            <a href="#" class="text-cyan-300">
              個人資料蒐集、處理及利用同意書
            </a>
          </span>
        </label>
      </div>

      <div class="text-center mt-10 mb-20">
        <button class="btn btn_hover">送出</button>
        <button class="btn btn_hover">清除</button>
      </div>
    </div>
  </div>

  <TheFooter />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TheFooter from "../components/TheFooter.vue";
export default { components: { Navbar, TheFooter } };
</script>

<style lang="scss" scoped>
input {
  @apply bg-white bg-opacity-20 h-10 text-white px-4;
}
.input_focus {
  @apply focus:bg-opacity-50 focus:outline-none;
}

::placeholder {
  @apply text-white;
}

.btn {
  @apply text-xl font-semibold border border-white py-1 px-4 text-white  ml-4 w-40;
}
.btn_hover {
  @apply hover:bg-white hover:text-[#184D9B];
}
</style>
