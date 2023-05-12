<template>
  <div style="background: linear-gradient(#1d559d, #1e3a8a)">
    <div class="w-4/5 max-w-[1500px] m-auto py-24 flex flex-col justify-center items-center">
      <div class="w-full py-20 flex flex-col
        xl:flex-row"
        >
        <div class="w-full mb-10
          xl:w-1/3 xl:mb-0"
          >
          <p class="text-5xl text-[#09EBFE] text font-semibold">課程測驗</p>
          <p class="text-white mt-1">Curriculum quiz</p>
        </div>

        <div class="w-full
          xl:w-2/3"
          >
          <p class="text-[#09EBFE]">測驗介紹</p>
          <p class="text-white mt-1">{{ quizIntfo }}</p>
        </div>
      </div>

      <hr class="w-full my-10 border-white">

      <div class="w-full text-white">
        <div>
          <div>
            <p class="text-[#09EBFE]">課程測驗</p>
            <p>課程名稱: {{ quizId }} 課程測驗</p>
            <p>課程編號:</p>
          </div>

          <template
            v-for="(quiz, key) in quizes"
            :key="quiz.name"
            >
            <!-- multiple -->
            <div
              class="mt-20"
              v-if="quiz.cate === 'multiple'"
              >
              <p>第{{ key + 1 }}題: 這是第一題的題目</p>
              <div class="w-full flex flex-wrap mt-6">
                <template
                  v-for="(item, ikey) in quiz.items"
                  :key="item"
                  >
                  <p class="w-1/2">
                    <label :for="`quiz${key + 1}${item}`">
                      <input
                        type="radio"
                        :id="`quiz${key + 1}${item}`"
                        :name="`quiz${key + 1}`"
                        class="mr-4"
                        >{{ multipleItemsTitile[ikey] }}: {{ item }} 
                    </label>
                  </p>
                </template>
              </div>
            </div>

            <!-- true & false -->
            <div
              class="mt-20"
              v-else
              >
              <p>第{{ key + 1 }}題: 這是第一題的題目</p>
              <div class="w-full flex flex-wrap mt-6">
                <p class="w-1/2">
                  <label :for="`quizT${key + 1}`">
                    <input
                      type="radio"
                      :id="`quizT${key + 1}`"
                      class="mr-4"
                      >是
                  </label>
                  
                </p>

                <p class="w-1/2">
                  <label :for="`quizF${key + 1}`">
                    <input
                      type="radio"
                      :id="`quizF${key + 1}`" 
                      name="`quiz${key + 1}`"
                      class="mr-4"
                      >否
                  </label>
                </p>
              </div>
            </div>
          </template>

          <div class="text-end">
            <button class="w-[160px] rounded-full text-center text-white border px-4 py-1 mr-6 mt-16 font-semibold text-lg 
              hover:bg-white hover:text-[#184D9B]"
              >
              取消測驗
            </button>
            <button class="w-[160px] rounded-full text-center text-white border px-4 py-1 mt-16 font-semibold text-lg 
              hover:bg-white hover:text-[#184D9B]"
              >
              繳交測驗 
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const quizIntfo = ref('首屆「前瞻 VLSI IC 大賽」經過為期4個月的賽程，兩階段的競賽，由元智大學組成的參賽隊伍自決賽中脫穎而出，榮獲首獎，獲頒新台幣20萬元獎金。台積公司為鼓勵在台灣的年輕學子進入先進製程佈局領域，首度舉辦全國性的「前瞻佈局」校園競賽，獲得學界極大的迴響，吸引大量的年輕學子投身半導體產業')
  
  const multipleItemsTitile = ref(['A','B','C','D'])
  const quizes = ref([
    {
      title: 'Title 1',
      cate: 'multiple',
      items: ['1A', '1B', '1C', '1D']
    },
    {
      title: 'Title 2',
      cate: 't&f'
    },
    {
      title: 'Title 3',
      cate: 't&f',
    },
    {
      title: 'Title 4',
      cate: 't&f',
    },
    {
      title: 'Title 5',
      cate: 't&f',
    },
    {
      title: 'Title 6',
      cate: 'multiple',
      items: ['6A', '6B', '6C', '6D']
    },
    {
      title: 'Title 7',
      cate: 'multiple',
      items: ['7A', '7B', '7C', '7D']
    },
    {
      title: 'Title 8',
      cate: 'multiple',
      items: ['8A', '8B', '8C', '8D']
    },
    {
      title: 'Title 9',
      cate: 'multiple',
      items: ['9A', '9B', '9C', '9D']
    },
    {
      title: 'Title 10',
      cate: 'multiple',
      items: ['10A', '10B', '10C', '10D']
    }
  ])
  const quizId = computed(() => useRoute().params.id)

</script>

<style lang="scss" scoped>
</style>
